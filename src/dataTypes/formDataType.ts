
export type ValidatorsType = [

]


export type InputType = [
	{}
]


export const requiredString = 'REQUIRED_STRING';
export const emailValue = 'EMAIL_VALUE';
export const phoneValue = 'PHONE_VALUE';


type RequiredStringValidator = ()=> {type:'REQUIRED_STRING'}
type EmailValidator = ()=> {type:'EMAIL_VALUE'}
type PhoneValidator = ()=> {type:'PHONE_VALUE'}

export const requiredStringValidator : RequiredStringValidator = () => ({type: requiredString});
export const emailValidator : EmailValidator = () => ({type: emailValue});
export const phoneValidator : PhoneValidator = () => ({type: phoneValue });