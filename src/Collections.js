import useFetch from './hooks/useFetch';
import CollectionCard from './Components/collections/CollectionCard';
import { CardDeck } from 'react-bootstrap';

export default function Collections() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function doFetch() {
  //     console.log('fetching');
  //     let response = await fetch(url);
  //     let body = await response.json();
  //     setData(body);
  //   }
  //   doFetch();
  // }, [url]);

  const { data } =  useFetch('https://digitalarthub.azurewebsites.net/api/Collections');

  console.log(data);


  return (
    <>
      <h1>Welcome to the collections page.</h1>
      
       <CollectionList collections={data}/>
      
    </>
  );

}

function CollectionList(props){
  var collectionsArray=props.collections;
  console.log(props);
  if(!collectionsArray){
    return (<div>
      Loading...
    </div>);
  }
  return(
    <CardDeck key={collectionsArray.collectionId} className="Collections">
      {collectionsArray.map((collection) => 
      CollectionCard(collection)
        )}
    </CardDeck>
  )
}