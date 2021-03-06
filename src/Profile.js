import useFetch from './hooks/useFetch';
import './css/Profile.css';
import { useParams } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';
import { ArtList } from './Art';
import { CollectionList } from './Collections';

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
    <div className="profile">
      <h1>{data.displayName}</h1>
        <p>{data.description}</p>
          <ProfileNav />
    </div>
  );
}

function ProfileNav() {
  
  const [key, setKey] = useState('art');
  return (
    <Tabs className="profile" activeKey={key} onSelect={k => setKey(k)} >
      <Tab className="profile" eventKey="art" title="Art">
        <ProfileArtList />
      </Tab>
      <Tab className="profile" eventKey="collections" title="Collections">
        <ProfileCollections />
      </Tab>
    </Tabs>
  )
}

function ProfileArtList() {
  const params = useParams();
      console.log(params);
   const id = (params.id);
   const { data } =  useFetch(`${API}/Profile/${id}/Art`);

   return (
     <ArtList art={data} />
   )
}

function ProfileCollections() {
  const params = useParams();
  console.log(params);
  const id = (params.id);
  const { data } =  useFetch(`${API}/Profile/${id}/Collection`);

  return (
    <CollectionList collections={data} />
  )
}