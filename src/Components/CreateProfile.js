import {Form, Button} from 'react-bootstrap'; 
import {useAuth} from '../Context/auth';
import { useHistory } from 'react-router-dom';
import NavLogin from './NavLogin';


const API = 'https://digitalarthub.azurewebsites.net/api';

export default function CreateProfile(props){
  // allows us to redirect to the create profile page upon form submission
  const history = useHistory();
  // use useAuth to verify the user
  const auth = useAuth();

  //If the user is not signed in, tell them to sign in
    const { user } = auth;
    if (!user) {
        return (
          <div hidden>
            <NavLogin state={"Login"} />
            </div>
        );
    }
    // on form submission go through and create a profile object with the values the user entered
    const handleSubmit = async e => {
      console.log(e.target)
      e.preventDefault();
      const profileDisplayName = e.target.profileDisplayName.value;
      const profileDescription = e.target.profileDescription.value;
      const newProfile = {
          profileDisplayName,
          profileDescription,
        };
        // send profile object to the api using the correct profile id
          const profileResult = await fetch(`${API}/Profile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              displayName: newProfile.profileDisplayName,
              description: newProfile.profileDescription,
          })
        })
        //console.log(newProfile);
        // reset the form
        e.target.reset();

        // redirct to 
        history.push(`/Profile/${profileResult.profileId}`);
      };
      return (
          <div className="create-form">
            <h2>Create Profile</h2>
              <Form onSubmit={handleSubmit}> 
                <Form.Group controlId="ProfileDisplayName">
                  <Form.Label>Profile Display Name</Form.Label>
                  <Form.Control type="text" name="ProfileDisplayName" placeholder="Display Name" required />
                </Form.Group>
                <Form.Group controlId="ProfileDescription">
                  <Form.Label>Profile Description</Form.Label>
                  <Form.Control type="text" name="ProfileDescription" placeholder="Profile Description" required />
                </Form.Group>
                <Button type="submit">Create Profile</Button>
              </Form>
          </div>
        );
      };
