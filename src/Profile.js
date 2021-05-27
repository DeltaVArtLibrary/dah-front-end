import {useAuth} from './Context/auth';
//import useFetch from './hooks/useFetch';
//import { useHistory } from 'react-router-dom';


//const profileAPI = 'https://digitalarthub.azurewebsites.net/api/Users/Profiles';
//const API = 'https://digitalarthub.azurewebsites.net/api';




export default function Profile() {

   // allows us to redirect to the art page upon form submission
   //const history = useHistory();
   // use useAuth to verify the user
   const auth = useAuth();
   //const { data } =  useFetch(profileAPI);
   // If the user is not signed in, tell them to sign in
   const { user } = auth;
   console.log(user);
   if (!user) {
       return (
           <p>You are not signed in. You need to be signed in to view your profile.</p>
       );
   }
  return (
    <>
      <h1>Welcome to your profile {user.username}!</h1>
    </>
  );
}