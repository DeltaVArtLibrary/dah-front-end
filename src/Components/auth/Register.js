import { useAuth } from '../../Context/auth';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
  
    <form onSubmit={handleSubmit} className="register-form">
      <label>Email <input type="text" name="email" /></label>
      <label>Username <input type="text" name="username" /></label>
      <label>Password <input type="password" name="password" /></label>
      <Button variant="danger">Register</Button>
    </form>

    </>
  );
}