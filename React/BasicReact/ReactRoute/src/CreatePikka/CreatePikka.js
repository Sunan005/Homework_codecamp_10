import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class CreatePikka extends Component {
    state = {
        files : [],
        validator: false,
        redirect: false
    };

    checkFiles = (filesName) => {
        let parts = filesName
        return parts.slice(parts.lastIndexOf('.') + 1)
    }; 

    isImage = (filesName) => {
        let str = this.checkFiles(filesName)
        switch(str.toLowerCase()) {
            case 'jpg':
            case 'gif':
            case 'bmp':
            case 'png':
            return true
        } 
        return false
    };

    onChange = async (e) => {
        let files = await e.target.files;
        let isValid = await this.isImage(files[0].name)

        if(isValid) {
          await this.setState({ files: files[0], validator: true });
        } else {
          alert('กรุณาใส่ files รูปภาพ')
          this.setState({ validator: false })
        }
        
        console.log(this.state.files)
    }

    onSubmitForm = (e) => {
        let files = this.state.files;
        let redirect = this.state.redirect
        let arr = [];
        e.preventDefault()
        async function fetchAPI () {
          try{
            const response = await fetch('http://localhost:8000',{
              method: 'POST',
              headers: { 
                'content-type': 'application/json',
                'Content-Type': 'multipart/form-data'
              },
              body: JSON.stringify({
                files: files
              })
              })
            const data = await response.json()
            arr.push(data.message)
          }catch(err) {
            console.log(err) 
        }
        }
        setTimeout( () => {
            if(arr[0] === "OK") {
            this.setState({
              redirect: !redirect
            })
          }}, 1000);
        fetchAPI ()
    };
    render() {
        const { validator, redirect} = this.state
        if(redirect) { return <Redirect to='/'></Redirect> } 
        return (
            <div style={{textAlign:'center',margin:'20vh auto'}}>
                <form onSubmit={this.onSubmitForm}>
                    <label htmlFor='file'>Picture</label>
                    <input type='file' id='picture' name='file' onChange={(e) => this.onChange(e)}/>
                    <button disabled={!validator}>Create</button>
                </form>
            </div>
        );
    }
}
