import { useState } from 'react';

import React from 'react';
import './LoginPage.css';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Grid, Message ,Form, Button } from 'semantic-ui-react';


import userService from '../../utils/userService';

export default function LoginPage({handleSignupOrLogin}){
   
  const [userState, setUserState] = useState({
    email: '',
    password:''
  })

  const [error, setError] = useState('')

  const navigate = useNavigate();

  async function handleSubmit(e) {
  
    e.preventDefault();

    try {
      
      await userService.login(userState)

      navigate('/');

      handleSignupOrLogin();
  


    } catch (err) {
      console.log(err)
      setError('check terminal and console')
    }





}

  
    function handleChange(e) {
      setUserState({
        ...userState,
        [e.target.name]:e.target.value
      })
    }


  return (
    <Grid>
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Message>Login   Pageeeeee</Message>
          <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={userState.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={userState.password}
              onChange={handleChange}
              required
          />
          
          <Button type='submit' > Login</Button>
      <Message>
        <Link to="/signup" >
        Sign Up
        </Link>
      </Message>
      </Form>
    </Grid.Column>
    </Grid>
      );
}

