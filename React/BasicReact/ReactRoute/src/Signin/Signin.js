import React, { Component } from 'react'
import '../App.css'

export default class SignIn extends Component {
  state = {
    formDate: {
      email:{
        value:'',
        name:'email',
        validator:{
          required: true
        },
        error:{ status: true, message:'' }
      },
      password: {
          value:'',
          name:'password',
          validator: {
              required:true,
              max: 6,
              min: 3
          },
          error:{ status: true, message:'' }
      }
    }, 
    fromIsValid: false,
    isAuth : false
  };

  onSubmitForm = (e) => {
    e.preventDefault()
    let email = this.state.formDate.email.value
    let password = this.state.formDate.password.value
    let isAuth = this.state.isAuth
    let arr = []
    async function createUser () {
      try {
        const response = await fetch('http://localhost:8000',{
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        const data = await response.json()
        arr.push(data.message)
      } catch(err){
        console.log(err)
      }
    };

    createUser()
    
    setTimeout( () => {
        if(arr[0] === "OK") {
        this.setState({
          isAuth : !isAuth
        })
      }}, 1000);
  };
 
  checkValue = (value, rules) => {
    let isValid = true;
    let message = '';
    let trimmedValue = value.trim()
    if(typeof trimmedValue !== 'undefined' && rules.name === 'email') {
        let lastAtPos = trimmedValue.lastIndexOf('@');
        let lastDotPos = trimmedValue.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && trimmedValue.indexOf('@@') === -1 && lastDotPos > 2 && (trimmedValue.length - lastDotPos) > 2)) {
          isValid = false;
          message = "Email ของคุณไม่ถูกต้อง"
        };
      };
    if(rules.validator.max < trimmedValue.length) {
      isValid = false;
      message = "รหัสผ่านมากเกินไป";
    };
    if(rules.validator.min > trimmedValue.length) {
      isValid = false;
      message = "รหัสผ่านสั่นเกินไป";
    };

    if(trimmedValue.length === 0){
      isValid = false;
      message = "กรุณากรอกช่องนี้"
    };
      
    return { isValid , message }
  } 

  changInput = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    let updateForm = this.state.formDate;

    updateForm[fieldName].value = fieldValue;

    let { isValid, message } = this.checkValue(fieldValue, updateForm[fieldName])
    updateForm[fieldName].error.status = !isValid;
    updateForm[fieldName].error.message = message;

    let newIsFormValid = true ;
    
    for(let fn in updateForm) {
      if( updateForm[fn].validator.required === true) {
        newIsFormValid = !updateForm[fn].error.status && newIsFormValid
      };
    };

    this.setState({
      formDate: updateForm,
      fromIsValid: newIsFormValid 
    });
  };

  render() {
      const { email, password } = this.state.formDate;
      const { fromIsValid } = this.state;
    return (
        <div onSubmit={this.onSubmitForm} style={{justifyContent:'center',display:'grid',gap:'20px', gridTemplateColumns:'100px auto'}}>
            <form method='post' action="http://localhost:8000/signup" >
               <label htmlFor='email'>Email</label>
               <input type='email' id='email' name='email' value={email.value} onChange={this.changInput} placeholder='Email'/>
               <label htmlFor='password'>Password</label>
               <input type='password' id='password' name='password' value={password.value} onChange={this.changInput} placeholder='Password'/>
               <button type='submit' disabled={!fromIsValid}>Submit</button>
            </form>
        </div>
    )
}
}
