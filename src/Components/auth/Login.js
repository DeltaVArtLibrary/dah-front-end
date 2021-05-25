import { useAuth } from '../../Context/auth';

export default function Login() {
  const {user, login, logout } = useAuth();

  if (user) {
    function handleLogout() {
      logout();
    }
    return (
      <button onClick={handleLogout}>Logout</button>
    )
  }

  const handleSubmit = e => {
    e.preventDefault();

    const { target } = e;
    const {username, password } = target.elements;

    login(username.value, password.value);
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Username <input type="text" name="username" /></label>
      <label>Password <input type="password" name="password" /></label>
    </form>
  );
}