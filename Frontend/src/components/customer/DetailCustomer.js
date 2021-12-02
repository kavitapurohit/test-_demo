import React, { Component } from 'react';
import axios from 'axios';
import Product_Header from '../product/Product_Header';

class DetailCustomer extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            customer:[]
        }
    }
    

    componentDidMount(){
        const id = this.props.match.params.id
        axios.post(`http://localhost:4000/shop/customer/showone/${id}`).then((res)=>{
            if(res.data){
                this.setState({
                    customer: res.data.response
                })
                console.log('response:', this.state.customer)
            }
        })
    }
    render() {
        const {usr_name, usr_email, usr_password} = this.state.customer
        return (
            <div>
                <Product_Header/>
                <h4>Customer Details</h4>
                <dl class="row">
                    <dt class="col-sm-3">Name</dt>
                    <dd class="col-sm-9">{usr_name}</dd>

                    <dt class="col-sm-3">Email</dt>
                    <dd class="col-sm-9">
                        <p>{usr_email}</p>
                    </dd>
                    
                    <dt class="col-sm-3">Password</dt>
                    <dd class="col-sm-9">
                        <p>{usr_password}</p>
                    </dd>
                </dl>
            </div>
        );
    }
}

export default DetailCustomer;