import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import React from 'react';

const ArtAPI = 'https://digitalarthub.azurewebsites.net/api/Art';

export default  function Art() {
  const { data, reload } =  useFetch('https://digitalarthub.azurewebsites.net/api/Art');

  console.log(data);


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
  var artArray=props.art;
  if(!artArray){
    return (<div>
      Loading...
    </div>);
  }
  return(
    <div>
      {artArray.map((art) => 
      <div>
          <p>{art.title}</p>
          <p>{art.content}</p>
          <p>{art.profileDisplayName}</p>
          </div>
        )}
    </div>
  )
}





 {/* {data.map((art) => 
          <p>{art.Title}</p>
        )

        } */}
         {/* <Card style={{ width: 250 }}>
          <Card.Img variant="top" src="holder.js/100px108" />
          <Card.Body>
            <Card.Title>{{Title}}</Card.Title>
            <Card.Text>{{profileDisplayName}}</Card.Text>
            <Card.Text>{{description}}</Card.Text>
            <Button variant="primary">See Details!</Button>
          </Card.Body>
          </Card>  */}