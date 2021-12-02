import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import Pagination from 'react-js-pagination';
import { listUser } from '../../action/auth.action';



const CustomerLandingPage = () => {


  const dispatch = useDispatch()
  const ListUser = useSelector((state) => state.authInfo.ListUser)

  console.log('list', ListUser)
  useEffect(() => {
    dispatch(listUser())
  }, []);

  return (
    <>
      <div className='container'>
        <div >
          <h1 >Customer List</h1>
          <table className='table '>
            <thead >
              <tr>
                <th className='font-weight-bold' scope='col'><strong>ID</strong></th>
                <th className='font-weight-bold' scope='col'><strong>Name</strong></th>
                <th className='font-weight-bold' scope='col'><strong>Email</strong></th>
                <th className='font-weight-bold' scope='col'><strong>Password</strong></th>
                <th className='font-weight-bold' scope='col'><strong>Status</strong></th>
                {/* <th className='font-weight-bold' scope='col' colSpan='3'><strong>Action</strong></th> */}
              </tr>
            </thead>
            <tbody>
              {ListUser && ListUser.length > 0 && ListUser.map((customer, index) => (
                <tr>
                  <th scope='row' >{index + 1}</th>
                  <th >{customer.customer_name}</th>
                  <th >{customer.customer_email}</th>
                  <th >{customer.customer_password}</th>
                  <th>
                    <Switch defaultChecked />
                  </th>
                  {/* <td> 
                  <a className="btn btn-info" href={`/customer/showoneCustomer/${customer._id}`} >
                    <i className="fas fa-info-circle" />&nbsp;View
                  </a> &nbsp;
                </td>
                <td>
                  <a className="btn btn-warning" href={`/customer/update/${customer._id}`} >
                    <i className="fas fa-edit" />&nbsp;Pay
                  </a> &nbsp;
                </td>
                <td>
                  <a className="btn btn-danger" >
                    <i className="far fa-trash-alt" />&nbsp;Delete
                  </a>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            activePage={10}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
          // onChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerLandingPage;