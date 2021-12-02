import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Joi from 'joi'
import { Controller, useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import { joiResolver } from '@hookform/resolvers/joi'
import { joiUpdatedMessage } from '../Utils/AppUtill'
import { SignUpUser } from '../action/auth.action'


const SignUp = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: joiResolver(
      Joi.object({
        customer_name:Joi.string().required().messages(joiUpdatedMessage),
        customer_password: Joi.string().min(3).max(20).required().messages(joiUpdatedMessage),
        customer_email: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .messages(joiUpdatedMessage),
      })
    ),
  })

  const onClickToSubmit = data => {
    console.log('data',data);
    dispatch(SignUpUser(data))
    history.push('/')
  }

  const loginclick = () => {
    history.push('/')
  }

  return (
    <div className="wrapper">
      <div className="form_parent">
        <div className="container form-main">
          <h1>Sign Up</h1>


          <Form className="row border_form" noValidate onSubmit={handleSubmit(onClickToSubmit)}>
          <Col md={12}>
              <Form.Group>
                <Controller
                  name="customer_name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        style={{ width: '40%' }}
                        placeholder="Enter Name"
                        value={value}
                        onChange={e => {
                          onChange(e)
                        }}
                      />
                      {errors.customer_name && errors.customer_name.message && <div>{errors.customer_name.message}</div>}
                    </>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group>
                <Controller
                  name="customer_email"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <>
                      <input
                        type="email"
                        className="form-control"
                        style={{ width: '40%' }}
                        placeholder="Enter email"
                        value={value}
                        onChange={e => {
                          onChange(e)
                        }}
                      />
                      {errors.customer_email && errors.customer_email.message && <div>{errors.customer_email.message}</div>}
                    </>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group>
                <Controller
                  name="customer_password"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <>
                      <input
                        type="password"
                        className="form-control"
                        style={{ width: '40%' }}
                        placeholder="Enter password"
                        value={value}
                        onChange={e => {
                          onChange(e)
                        }}
                      />
                      {errors.customer_password && errors.customer_password.message && <div>{errors.customer_password.message}</div>}
                    </>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={12} className="text-center mb-3">
              <Button variant="pink" type="submit" className="py-2 px-3 btn-sm" >
                Submit
              </Button>
            </Col>
            <Col md={20} className="text-center mb-3">
              <p>
                Already have an account ? <a onClick={()=>loginclick()} style={{cursor:'pointer'}} className="text-decoration-none text-white">Login </a>.
              </p>
            </Col>
          </Form>


        </div>
      </div>

      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}

export default SignUp;
