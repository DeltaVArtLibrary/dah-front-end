import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/auth';
import { useAuth } from './Context/auth';

export default function Auth(props)
{
  const { children, permission } = props;
  const { user } = useAuth();

  if (!user)
  return null;

  if (permission) {
    if (user.permissions.includes(permission)) {
      return children;
    } else {
      return null;
    }
  }
  return children;
}


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <AuthProvider>
    <App />
   </AuthProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
