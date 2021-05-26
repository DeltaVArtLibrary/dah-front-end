import { useAuth } from '../../Context/auth';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Login() {
  const { user, login, logout } = useAuth();

  if (user) {
      function handleLogout() {
          logout();
      }

      return (
          <button className="logout" onClick={handleLogout}>Logout</button>
      )
  }

  const handleSubmit = async e => {
      e.preventDefault();

      const { target } = e;
      const { username, password } = target.elements;


      if (!await login(username.value, password.value)) {
          
          target.reset();
      } else {
          // redirct to the homepage
            Redirect('./Home');
      }
  };

  return (
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username <input type="text" name="username" /></label>
        <label>Password <input type="password" name="password" /></label>
        <Button variant="danger">Login</Button>
      </form>
    );
}