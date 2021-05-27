import {Form, Button} from 'react-bootstrap'; 
import {useAuth} from '../Context/auth';
import { useHistory } from 'react-router-dom';
import { useProfiles } from '../Context/profiles';


const API = 'https://digitalarthub.azurewebsites.net/api';


export default function CreateArt(props){
    // allows us to redirect to the art page upon form submission
    const history = useHistory();
    // use useAuth to verify the user
    const auth = useAuth();
    const { data } =  useProfiles();

    // If the user is not signed in, tell them to sign in
    const { user } = auth;
    if (!user) {
        return (
            <p>You are not signed in, please sign in to create art.</p>
        );
    }
    // on form submission go through and create an art object with the values the user entered
    const handleSubmit = async e => {
        e.preventDefault();
        const artTitle = e.target.ArtTitle.value;
        const profileId = parseInt(e.target.ProfileId.value);
        const artContent = e.target.ArtContent.value;
        const artDescription = e.target.ArtDescription.value;
        const newArt = {
            artTitle,
            profileId,
            artContent,
            artDescription,
          };
          // send art object to the api using the correct profile id
          await fetch(`${API}/Profile/${profileId}/Art`, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${user.token}`,
                  'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                profileId: newArt.profileId,
                title: newArt.artTitle,
                content: newArt.artContent,
                description: newArt.artDescription,
            })
          })
          console.log(newArt);
          // reset the form
          e.target.reset();

          // redirct to art
          history.push('/Art');
    };


   return (
    <div className="create-art-form">
      <h2>Create Art</h2>
      <Form onSubmit={handleSubmit} > 
        <Form.Group controlId="ArtTitle">
          <Form.Label>Art Title</Form.Label>
          <Form.Control type="text" name="ArtTitle" placeholder="Title" required/>
        </Form.Group>
        <Form.Group controlId="ProfileId">
            <Form.Label>Profile</Form.Label>
            <Form.Control as="select" custom disabled={!data}>
              {!data ? <option>Loading...</option>: data.map(profile => (
                <option key={profile.id} value={profile.id}>{profile.displayName}</option>
              ))}
            </Form.Control>
          </Form.Group>
        <Form.Group controlId="Content">
          <Form.Label>Art Content</Form.Label>
          <Form.Control type="text" name="ArtContent" placeholder="Put your Content Here" required />
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



