import useFetch from './hooks/useFetch';
import { useParams } from 'react-router-dom';

//const profileAPI = 'https://digitalarthub.azurewebsites.net/api/Users/Profiles';
const API = 'https://digitalarthub.azurewebsites.net/api';

export default function Profile() {
   const params = useParams();
   console.log(params);
   const id = (params.id);
   const { data } =  useFetch(`${API}/Profile/${id}`);
   // If the user is not signed in, tell them to sign in
   //console.log(user);
   console.log(data);
   if(!data){
     return <h1>Loading...</h1>
   }

  return (
    <>
      <h1>{data.displayName}</h1>
      <p>{data.description}</p>
    </>
  );
}