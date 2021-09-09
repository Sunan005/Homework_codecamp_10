import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class SearchBar extends Component {
    state = {
        url: "",
        redirect: false
    }

    input = (e) => {
       const fieldValue = e.target.value;
       const upDate = this.state
       upDate.url = fieldValue

       this.setState({
           url : upDate.url
       })
       console.log(this.state.redirect)
    };

    click = () => {
        this.setState({
            redirect: true
        })
    };
    render() {
        let { url, redirect } = this.state
        if(redirect) { return <Redirect to={`/${url}`}></Redirect> }
        return (
            <div style={{textAlign:'center'}}>
                <input type='text' name='url' value={url} placeholder='Path' onChange={this.input}></input>
                <button type='submit' onClick={() => this.click()}>Search</button>
            </div>
        )
    }
}
