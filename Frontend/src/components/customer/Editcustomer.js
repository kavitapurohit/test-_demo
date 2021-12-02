import React, { Component } from 'react';
import axios from 'axios';
import Product_Header from '../product/Product_Header';
import {Redirect, useHistory} from "react-router-dom"
const history = useHistory


class Editcustomer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            usr_name:"",
            usr_email:"",
            usr_password:"",
        }
    }

    componentDidMount(){

        const id = this.props.match.params.id
        axios.post(`http://localhost:4000/shop/customer/showone/${id}`).then((res)=>{
            
            if(res.data){
         
                this.setState({
                    usr_name:res.data.response.usr_name,
                    usr_email:res.data.response.usr_email,
                    usr_password:res.data.response.usr_password
                })
            }
        })
    }
    handleInputChange = (e) => {
        const {name, value} = e.target
        this.setstate({
            ...this.state,
            [name]:value, 
        })
    }

    onSubmit = (e) =>{
        // e.preventDefault()
        const id = this.props.match.params.id
        console.log(id)
        const {usr_name, usr_email, usr_password} = this.state
        const data = {
            usr_name:usr_name,
            usr_email:usr_email,
            usr_password:usr_password,    
        }
        console.log(data) 
        axios.put(`http://localhost:4000/shop/customer/updateCustomer/${id}`, data).then((res)=>{
            alert('Updated Customer Details')
            if(res.data){
                window.location.href = "/customer"
            }
        })
    }
    render() {
        return (
            <div >
                <Product_Header/>
                <h3>Edit Customer</h3>
                <div className="form">
                <div>
                        <label>Name</label>
                        <input 
                            type="text"
                            name="usr_name"
                            placeholder="Enter Name"
                            value={this.state.usr_name}
                            onChange={(e)=>{this.setState({usr_name: e.target.value})}}                        />
                    </div>
                    
                    <div>
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder="Enter Email"
                            name="usr_email"
                            value={this.state.usr_email}
                            onChange={(e)=>{this.setState({usr_email: e.target.value})}}                        />
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            name="usr_password"
                            placeholder="Enter Password"
                            // defaultValue={this.state.usr_password}
                            value={this.state.usr_password}
                            onChange={(e)=>{this.setState({usr_password: e.target.value})}}
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={this.onSubmit}>Submit</button>
                    </div>
            </div>
            </div>
        );
    }
}

export default Editcustomer;