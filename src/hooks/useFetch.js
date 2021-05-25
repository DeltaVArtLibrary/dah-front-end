import { useEffect, useState } from 'react';


export default function useFetch(url) {

    const [data, setData] = useState(null);
    useEffect(() => {
        async function doFetch() {
            console.log('fetching!');
            let response = await fetch(url);
            let body = await response.json();
            setData(body);
        }
        doFetch();
    }, [url]);
    return {
        data,
    };
}