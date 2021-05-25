import { useAuth } from '../../Context/auth';

export default function Register() {
  const {register} = useAuth();
  
  const handleSubmit = e => {
    e.preventDefault();

    const { target } = e;
    const {email, username, password } = target.elements;

    register(email.value, username.value, password.value);
   };

   return (
    <>
      <h1>Register here please!</h1>
  
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email <input type="text" name="email" /></label>
      <label>Username <input type="text" name="username" /></label>
      <label>Password <input type="password" name="password" /></label>
      <button>Register</button>
    </form>

    </>
  );
}