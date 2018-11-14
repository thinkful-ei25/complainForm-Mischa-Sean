

export const required = value => value ? undefined : 'Required'; 

export const notEmpty = value => (value !== '') ? undefined : 'Field must a value!' 
//non-empty

//value===5 characters
export const lengthFive = value => (value.length === 5) ? undefined : 'It must be length of 5......'
//each character is a number

export const isNumber = value => (!isNaN(value)) ? undefined : 'Can\'t put letters here yo!'; 