import { useEffect, useState } from 'react';
import { useAuth } from '../Context/auth';


export default function useFetch(url, requireAuth=false) {
    const {user} = useAuth();
    

    const [data, setData] = useState(null);
    useEffect(() => {
        async function doFetch() {
            console.log('fetching!');
            // let response = await fetch(url);
            let headers = {};
            if(user){
                headers['Authorization'] = `Bearer ${user.token}`
            } 
            else if (requireAuth){
                return;
            }
            let response = await fetch(url, {headers});
            let body = await response.json();
            setData(body);
        }
        doFetch();
    }, [url, user, requireAuth]);
    
    return {
        data,
    };
}