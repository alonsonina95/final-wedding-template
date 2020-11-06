import React, { Component } from 'react';
import './Confirmation.css';
import { Button } from '@material-ui/core';


export default class Confirmation extends Component { 

   
    render() {
        return (
            <div className="container">
                <Button  variant="outlined" color="primary">Full Names</Button>
                <Button variant="outlined" color="primary">Only me</Button>
            </div>
        );
    }

}

