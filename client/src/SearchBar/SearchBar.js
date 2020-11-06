import React, { Component, useState } from 'react';
import './SearchBar.css';
import { Button, Input } from '@material-ui/core';
import Confirmation from '../Confirmation/Confirmation';

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        // Find the names of the guests from the db here
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // callApi = async () => {
    //     const response = await fetch('');
    //     const body = await response.json();
    
    //     if (response.status !== 200) throw Error(body.message);
    
    //     return body;
    // };

    render() {
        const {fullName} = this.state;

        return(
            <div className="searchbar-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <Input color="primary" type="text" name="fullName" onChange={this.handleInputChange}/>
                    <Button id="searchButton" variant="outlined" color="primary" type="Submit">Search your name</Button>
                </form>
            {/* <Confirmation fullName={fullName}/> */}
            </div>
        );
    }
}

