
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../context/AuthContext'; 
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); // Create navigate function

  const handleLogin = (e) => {
    e.preventDefault();
 
    login(email, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Login failed: ' + error); 
      });
  };

  return (
    <Container className="mt-5 card"> {/* Added card class for shadow and transition */}
      <Row className="justify-content-center"> {/* Center the form on the screen */}
        {/* Left Column */}
        <Col xs={12} md={8} lg={6} className="mb-5"> {/* Adjust width for different screens */}
          <div className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img 
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px' }} 
                alt="logo" 
              />
              <h4 className="mt-1 mb-5">Welcome to Our Property Rental Portal</h4>
            </div>

            <p>Please log in to manage your properties and find your dream rental.</p>

            <Form onSubmit={handleLogin} className="w-100">
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
                  Sign in
                </Button>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
            </Form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Dont have an account?</p>
              <Button variant="outline-danger" className='mx-2' onClick={() => navigate('/register')}>
                Sign up
              </Button>
            </div>
          </div>
        </Col>

        {/* Right Column: Hidden on small screens */}
        <Col md={6} className="d-none d-md-flex gradient-custom-2"> {/* Hidden on screens smaller than md */}
          <div className="d-flex flex-column justify-content-center" style={{ borderRadius: '10px', height: "40rem" }}>
            <div className="text-center text-dark px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Find Your Perfect Home</h4>
              <p className="small mb-0">
                Explore a wide range of rental properties that suit your needs. 
                Whether you are looking for a cozy apartment or a spacious house, 
                we have something for everyone. Start your rental journey with us today!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
