import { useState } from "react";
import {
    Segment,
    Grid,
    Form,
    Image,
    Header,
    Button
    
} from "semantic-ui-react";

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
export default function SignUpPage({handleSignUpOrLogin}) {
    
    //  The data that will be recieved by the SignUp form and stored in State
    const [userState, setUserState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });

    const [photo, setPhoto] = useState('')

    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', photo)
        

        for (let key in userState) {
            formData.append(key, userState[key])
        }
        

      try { 
        console.log(formData.forEach((item) => console.log(item)))
            await userService.signup(formData);

            handleSignUpOrLogin();
            navigate('/')
            
        }
        catch (err) {
            console.log(err.message);
            setError("Try Signing Up Again")
        }

    }
    
    function handleChange(e){
        setUserState({
            ...userState,
            [e.target.name]: e.target.value
        })
    }
    
    function handleFileInput(e) {
        
        console.log(e.target.files)
        setPhoto(e.target.files[0])
    }

    return (
    
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
            <Header>
    Sign Up
       </Header>
                <Form onSubmit={handleSubmit}>
                <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={userState.username}
              onChange={handleChange}
              required
            />
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
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={userState.passwordConf}
              onChange={handleChange}
              required
            />
           
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn">
              Signup
            </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} />: null}
                </Form>
            </Grid.Column>
</Grid>

)




}