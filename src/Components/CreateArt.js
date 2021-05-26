import {Form, Button} from 'react-bootstrap'; 

import {useAuth} from '../Context/auth';
const createArtAPI = 'https://digitalarthub.azurewebsites.net/api/Profile/30/Art';

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
    console.log(user.id);
    const handleSubmit = e => {
        e.preventDefault();
        const artTitle = e.target.ArtTitle.value;
        const artist = e.target.ArtistName.value;
        const artContent = e.target.ArtContent.value;
        const artDescription = e.target.ArtDescription.value;
        const newArt = {
            artTitle,
            artist,
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
          <Form.Control type="text" name="ArtTitle" placeholder="Art Title" />
        </Form.Group>
        <Form.Group controlId="Artist">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type="text" name="ArtistName" placeholder="Artist Name" />
        </Form.Group>
        <Form.Group controlId="Content">
          <Form.Label>Art Content</Form.Label>
          <Form.Control type="text" name="ArtContent" placeholder="Put your Content Here" />
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