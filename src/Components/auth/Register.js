import { useAuth } from '../../Context/auth';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'react-bootstrap';

export default function Register() {
  const {register} = useAuth();
  
  const handleSubmit = async e => {
    e.preventDefault();

    const { target } = e;
    const {email, username, password } = target.elements;

    if (!await register(email.value, username.value, password.value)) {
          
      target.reset();
  } else {
      // redirct to the homepage
        Redirect('./Home');
    }
   };



   return (
    <>
      <h4>Register below.</h4><br>
      </br>
  
        <form className="register-form" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Username </Form.Label>
          <Form.Control type="text" name="Username" placeholder="User Name" required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Button type="submit" variant="danger" >Register</Button>
    </form>

    </>
  );
}