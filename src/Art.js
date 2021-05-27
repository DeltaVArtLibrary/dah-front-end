import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import './css/Art.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Jumbotron, Container} from 'react-bootstrap'






export default  function Art() {
  const { data } =  useFetch('https://digitalarthub.azurewebsites.net/api/Art');
  
    // console.log(data);


  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>DIGITAL ART HUB</h1>
            <p>
              Welcome to your online artist community.
              A place for you to explore your varied artistic expressions. 
              A place to collaborate with others of mutual interests.
            </p>
        </Container>
      </Jumbotron>
      <div>
       <ArtList art={data} />
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
      <Card className="SingleCard" key={art.artId} style={{ width: 400 }}>

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

