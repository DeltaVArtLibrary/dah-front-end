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
    <div className="CardLineup">
      {artArray.map((art) => 
    <Card className="SingleCard" style={{ width: 400 }}>

      <Card.Body className="fixingTextContent">
          <Card.Title>{art.title}</Card.Title>
          <Card.Text className="scrollable">{art.content}</Card.Text>
          <Card.Title className="Description">Description</Card.Title>
          <Card.Text className="scrollableDescription">{art.description}</Card.Text>
          <Card.Text className="profileName">{art.profileDisplayName}</Card.Text>
      </Card.Body>
    </Card>
        )}
    </div>
  )
}

