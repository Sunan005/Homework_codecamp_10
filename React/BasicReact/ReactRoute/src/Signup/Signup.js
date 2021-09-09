import React, { Component } from 'react';
import '../App.css'

export class Signup extends Component {
  state = {
    formDate: {
      email: {
        value:'',
        name: 'email',
        validator: {
        required:true
        },
        error: {status: true, message:''}
        
      },
      confirm: {
        value:'',
        name:'confirm',
        validator: {
          required:true
        },
        error: {status: true, message:''}
      },
      password: {
        value:'',
        name:'password',
        validator: {
          max: 6,
          min: 3,
          required:true
        },
        error: {status: true, message:''}
      }

    },
    fromIsValid:true
  };

  onSubmitForm = (e) => {
    let email = this.state.formDate.email.value
    let password = this.state.formDate.password.value
    e.preventDefault()
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
        console.log(data)
      } catch(err){
        console.log(err)
      }
    }
    createUser ()
  
  };


  checkValue(value, rules, updateForm ) {
    let isValid = true;
    let message ='';
    let trimmedValue = value.trim();

    //  Email 
    if(typeof trimmedValue !== 'undefined' && rules.name === 'email') {
      let lastAtPos = trimmedValue.lastIndexOf('@');
      let lastDotPos = trimmedValue.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && trimmedValue.indexOf('@@') === -1 && lastDotPos > 2 && (trimmedValue.length - lastDotPos) > 2)) {
        isValid = false;
        message = "Email ของคุณไม่ถูกต้อง"
      };
    };

    // password 
    if(rules.validator.max < trimmedValue.length) {
      isValid = false;
      message = "รหัสผ่านมากเกินไป";
    };
    if(rules.validator.min > trimmedValue.length) {
      isValid = false;
      message = "รหัสผ่านสั่นเกินไป";
    };
    
    // confirm password
    if(updateForm.confirm.value !== updateForm.password.value && rules.name === 'confirm') {
      isValid = false;
      message = "รหัสผ่านไม่ตรงกัน"
    }
   
    if(trimmedValue.length === 0){
      isValid = false;
      message = "กรุณากรอกช่องนี้"
    };
    return { isValid, message } 
  };

  changInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updateForm = this.state.formDate;
    updateForm[fieldName].value = fieldValue;

    let { isValid, message } = this.checkValue(fieldValue, updateForm[fieldName], updateForm )

    updateForm[fieldName].error.status = !isValid;
    updateForm[fieldName].error.message = message;

    let newIsFormValid = true ;
    
    for(let fn in updateForm) {
      if( updateForm[fn].validator.required === true) {
        newIsFormValid = !updateForm[fn].error.status && newIsFormValid
      };
    };
   
    this.setState({
        formDate:updateForm,
        fromIsValid: newIsFormValid 
    })
  };
    
    render() {
        const {email, password, confirm} = this.state.formDate;
        const { fromIsValid } = this.state
      return (
        <div>
          <form onSubmit={this.onSubmitForm} method='post' style={{display:'grid',gridTemplateColumns:' 300px',justifyContent:'center',margin:'5vh 0',gap:'20px'}}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={email.value} onChange={this.changInput} placeholder='Email' />
            <span className='danger'>{email.error.message}</span>
  
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' value={password.value} onChange={this.changInput} placeholder='Password'/>
            <span className='danger'>{password.error.message}</span>

            <label htmlFor='confirm'>Confirm</label>
            <input type='password' id='confirm' name='confirm' value={confirm.value} onChange={this.changInput} placeholder='confirm'/>
            <span className='danger'>{confirm.error.message}</span>
            
            <button htmlFor='Signup' id='Signup' style={{width:'100px',margin:'0 auto'}} disabled={!fromIsValid} >Signup</button>
          </form>
        </div>
      );
      };
};

export default Signup

