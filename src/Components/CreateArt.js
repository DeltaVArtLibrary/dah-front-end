import {Form, Button} from 'react-bootstrap'; 
import {useState} from 'react';
import {useAuth} from '../Context/auth';

export default function CreateArt(props){
    const auth = useAuth();
    console.log(auth);
    const { user } = auth;
    console.log(user);

    if (!user) {
        return (
            <p>You are not signed in, please sign in to create art.</p>
        );
    }

    const handleSubmit = e => {
        e.preventDefault();
        const artTitle = e.target.ArtTitle.value;
        const artist = e.target.ArtistName.value;
        const artDescription = e.target.ArtDescription.value;

        const newArt = {
            id: Date.now(),
            artTitle,
            artist,
            artDescription,
            
          };
  
          console.log(newArt);
  
          props.onSave(newArt);


    };
   return (
    <div className="create-art-form">
      <h2>Create Art</h2>
      <Form onSubmit={handleSubmit} > 
        <Form.Group controlId="ArtTitle">
          <Form.Label>Art Title</Form.Label>
          <Form.Control type="text" name="ArtTitle" placeholder="Art Title" />
        </Form.Group>
        <Form.Group controlId="Artist">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type="text" name="ArtistName" placeholder="Artist Name" />
        </Form.Group>
        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="ArtDescription" placeholder="Art Description"/>
        </Form.Group>
        <Button type="submit" >Create Art</Button>
      </Form>
    </div>
   );
};