import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';


// api key 
const profileAPI = 'https://digitalarthub.azurewebsites.net/api/Users/Profiles';

export function useProfiles() {
  return useContext(ProfilesContext)
}

export const ProfilesContext = createContext();

export function ProfilesProvider(props) {
  const value =  useFetch(profileAPI, true);

  return (
    <ProfilesContext.Provider value={value}>
      {props.children}
    </ProfilesContext.Provider>
  );
}
