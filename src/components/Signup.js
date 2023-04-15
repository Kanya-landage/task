import React,{useState} from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import validator from "validator";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});
    const [userInfo,setUserInfo] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();
     const responseGoogle =  (response) => {
          localStorage.setItem("currentUser",JSON.stringify(response))
          navigate("/")
     }
     const handleSubmit = (e) => {     
          e.preventDefault();      
          const allErrors = {
            name:"",
            email:"",
            password:""
          };       
      
          if (!validator.isEmail(userInfo.email)) {
            allErrors.email = "Invalid email address";
          }
      
          if (userInfo.name !== "" && userInfo.email !== "" && userInfo.password !== "") {
            setErrors(allErrors);
            setValidated(false);
            localStorage.setItem("currentUser",JSON.stringify(userInfo))            
            setUserInfo({
                name:"",
                email:"",
                password:""
            })
            navigate("/")
          }
          else {
            setValidated(true);            
          }      
      };

    return(
        <Container className="d-flex w-100 mt-5 justify-content-center align-items-center">
            <Card >
             <Form className="p-5"  noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
                <h4 className="text-center mb-">Sign Up</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" value={userInfo.name} placeholder="Enter name"  onChange={(e) => setUserInfo({...userInfo,name:e.target.value})} required/>                
                           <Form.Control.Feedback type="invalid">
                               Please enter name
                           </Form.Control.Feedback>
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userInfo.email} placeholder="Enter email" isInvalid={!!errors.email} onChange={(e) => setUserInfo({...userInfo,email:e.target.value})} required />                
                      <Form.Control.Feedback type="invalid">
                         Please enter valid email
                      </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={userInfo.password} placeholder="Password"  onChange={(e) => setUserInfo({...userInfo,password:e.target.value})} required/>
                      <Form.Control.Feedback type="invalid">
                          Please enter password
                      </Form.Control.Feedback>    
                </Form.Group>

                <div className="text-center d-grid gap-2">
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div>

                <div className="text-center mt-3">
                    <p className="form-check-label text-muted">OR</p>
                    </div>
                    <div className="text-center">
                    <GoogleLogin
                    clientId="971623344603-0qquan9pcdb9iu7oq9genvpnel77i7oa.apps.googleusercontent.com"
                    buttonText="Sign up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    />
                 </div>
            
              </Form>
             </Card>
            
        </Container>
    )
}
export default Signup;