import React from 'react';
import {reduxForm, Field} from 'redux-form'; 
import {required, notEmpty, lengthFive, isNumber} from '../validators'; 
import Input from './Input'; 

export class ComplaintForm extends React.Component {
  onSubmit(values) { 
    console.log(values);
  }
  render() { 
    return(
      <form 
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values))}
      >
        <label>Full Name</label>
        <Field 
          component={Input} 
          type='text' 
          name='fullName' 
          placeholder='John Doe' 
          validate={[required, notEmpty]}>
        </Field>
        <label>Issue</label>
        <Field component="select" name="issue" id="issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some  of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <label>Details</label>
        <Field component={Input} type='text' name='details' validate={[notEmpty, isNumber, lengthFive]}></Field>
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

export default reduxForm({ 
  form: 'complaint'
})(ComplaintForm); 