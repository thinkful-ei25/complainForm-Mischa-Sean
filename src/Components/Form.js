import React from 'react';
import {reduxForm, Field} from 'redux-form'; 

export class ComplaintForm extends React.Component {
  render() { 
    return(
      <form>
        <label for='fullName'>Full Name</label> 
        <Field component="input" type='text' name='fullName' placeholder='John Doe'></Field>
        <label for='issue' placeholder='Package was lost'>Issue</label>
        <Field component="select" name="issue" id="issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <label for='details' placeholder=''>Details</label>
        <Field component="input" type='text' name='details'></Field>
        <button component="input" type='submit'>Submit></button>
      </form>
    );
  }
};

export default reduxForm({ 
  form: 'complaint'
})(ComplaintForm); 