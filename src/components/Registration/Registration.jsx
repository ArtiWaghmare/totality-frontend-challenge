// Registration.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../context/AuthContext'; 
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './Registration.css'; // Make sure to create a CSS file for styles

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth(); 
  const navigate = useNavigate(); // Create navigate function

  const handleRegister = (e) => {
    e.preventDefault();
 
    register(name, email, password)
      .then(() => {
        navigate('/login'); // Navigate to login after successful registration
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        alert('Registration failed: ' + error); 
      });
  };

  return (
    <Container className="mt-5 card custom-card">
      <Row>
        <Col md={6} className="mb-5 mx-auto"> 
          <div className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img 
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }} 
                alt="logo" 
              />
              <h4 className="mt-1 mb-5">Create Your Account</h4>
            </div>

            <p>Please fill in the details to register and find your dream rental.</p>

            <Form onSubmit={handleRegister} className="w-100">
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
              </Form.Group>

              <div className="text-center mb-4">
                <Button className="w-100 gradient-custom-2 button-gradient" type="submit">
                  Register
                </Button>
              </div>
            </Form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <Button variant="outline-danger" className='mx-2' onClick={() => navigate('/login')}>
                Log in
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
