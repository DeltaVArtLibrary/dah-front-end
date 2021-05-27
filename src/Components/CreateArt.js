import {Form, Button} from 'react-bootstrap'; 
import { useState } from 'react';
import {useAuth} from '../Context/auth';
import useFetch from '../hooks/useFetch';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const profileAPI = 'https://digitalarthub.azurewebsites.net/api/Users/Profiles';
const createArtAPI = 'https://digitalarthub.azurewebsites.net/api/Profile/30/Art';

export function ProfileData(prop){
    const auth = useAuth();
    console.log(auth);
    const { user } = auth;
    console.log(user);
};

export default function CreateArt(props){
    const auth = useAuth();
    console.log(auth);
    const { user } = auth;
    console.log(user);
    const [ArtTitle] = useState("Title");
    
    const { data } =  useFetch(profileAPI);
     if(data != null){
        data.forEach(p => console.log(p.id, p.displayName));
     }
    

    if (!user) {
        return (
            <p>You are not signed in, please sign in to create art.</p>
        );
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const artTitle = e.target.ArtTitle.value;
        const profile = e.target.ProfileName.value;
        const artContent = e.target.ArtContent.value;
        const artDescription = e.target.ArtDescription.value;
        const newArt = {
            artTitle,
            profile,
            artContent,
            artDescription,
          };
          
          fetch(createArtAPI, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${user.token}`,
                  'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                profileId: 30,
                title: newArt.artTitle,
                content: newArt.artContent,
                description: newArt.artDescription,
            })
          })
          console.log(newArt);
    };


   return (
    <div className="create-art-form">
      <h2>Create Art</h2>
      <Form onSubmit={handleSubmit} > 
        <Form.Group controlId="ArtTitle">
          <Form.Label>Art Title</Form.Label>
          <Form.Control type="text" name="ArtTitle" placeholder={ArtTitle} />
        </Form.Group>
        <Form.Group controlId="Profile">
          <Form.Label>Profile</Form.Label>
          <DropdownButton controlId="dropdown-basic-button" title="Dropdown button" name="profile">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        </Form.Group>
        <Form.Group controlId="Content">
          <Form.Label>Art Content</Form.Label>
          <Form.Control type="text" name="ArtContent" placeholder="Put your Content Here" />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="ArtDescription" placeholder="Art Description"/>
        </Form.Group>
        <Button type="submit">Create Art</Button>
      </Form>
    </div>

   );
};



