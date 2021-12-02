import React, { useState } from 'react';
import Product_Header from '../product/Product_Header';
import {useHistory} from 'react-router-dom'

function AddCustomer(props) {
    const [usr_name, setname] = useState("")
    const [usr_password, setpassword] = useState("")
    const [usr_email, setemail] = useState("")
    const history = useHistory()
 
    async function addcustomer(){
        let item = {usr_name,usr_email, usr_password}
        console.warn(item)
        let result = await fetch('http://localhost:4000/shop/customer/addCustomer',{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.log("result", result)
        localStorage.setItem("user_info", JSON.stringify(result))
        history.push("/customer")
    }
        return (
            <div>
                <Product_Header/>
            <div className="form">   

                    <div class="Main_container">
                        <h1>Add Customer</h1>
                        <hr />

                        <label ><b>Name</b></label>
                        <input type="text" value={usr_name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Name"  required/>

                        <label ><b>Email</b></label>
                        <input type="text" value={usr_email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter Email"  required/>

                        <label ><b>Password</b></label>
                        <input type="password" value={usr_password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Enter Password" required/>

                        <div class="clearfix_sign">
                            <button type="submit" onClick={addcustomer}>Add</button>
                            <button type="button" class="closebtn">Cancel</button>    
                        </div>
                    </div>
            </div>
            </div>
        );
    }
    

export default AddCustomer;