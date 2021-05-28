import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import './css/Art.css';
import React, { useEffect } from 'react';
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
            <p> </p>
            <p> </p>
              <p>Welcome to your online artist community.</p>
              <p>A place for you to explore your varied artistic expressions.</p> 
              <p>A place to collaborate with others of mutual interests.</p>
            
        </Container>
      </Jumbotron>
      <div>
       <ArtList art={data} />
      </div>
      
    </>
  );
}

export function ArtList(props){
  const artArray=props.art; // array to store the art 
  useEffect(() => {
    if(artArray)
    {
    artArray.reverse();
    console.log("reversing");
    }
  },
  [artArray]);
 
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
        <ArtCard art={art} key={art.artId}/>
      )}
    </div>
  )
}

export function ArtCard(props){
  const { art } = props;
  // console.log(art);
  return(
    <Card className="SingleCard" key={art.artId} style={{ width: 400 }}>
      <Card.Body className="fixingTextContent">
          <Card.Title className="artTitle">{art.title}</Card.Title>
          <Card.Text className="scrollable">{art.content}</Card.Text>
          {art.description&&<><Card.Title className="Description">Description</Card.Title>
          <Card.Text className="scrollableDescription">{art.description}</Card.Text></>}
          <Card.Text className="profileName">{art.profileDisplayName}</Card.Text>
      </Card.Body>
    </Card>
  )
}