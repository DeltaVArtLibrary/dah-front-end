import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import './css/Art.css';
import React from 'react';
import Card from 'react-bootstrap/Card';



export default  function Art() {
  const { data } =  useFetch('https://digitalarthub.azurewebsites.net/api/Art');

  // console.log(data);


  return (
    <>
      <h1>Welcome to the art page.</h1>
      <div>
       <ArtList art={data}/>
      </div>
    </>
  );
}

function ArtList(props){
  var artArray=props.art; // array to store the art 
  if(!artArray){

    // Need to give a return while the art loads
    return (<div>
      Loading...  
    </div>);
  }

  // when the art is loaded into the array we now map it
  return(
    <>
      {artArray.map((art) => 
    <Card style={{ width: 250 }}>

      <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text>{art.content}</Card.Text>
          <Card.Text>{art.profileDisplayName}</Card.Text>
      </Card.Body>
    </Card>
        )}
    </>
  )
}

