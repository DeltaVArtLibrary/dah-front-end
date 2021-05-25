import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import React from 'react';

const ArtAPI = 'https://digitalarthub.azurewebsites.net/api/Art';

export default async function Art() {
  const { data, reload } = await useFetch('https://digitalarthub.azurewebsites.net/api/Art');

   const ArtDetails = {
   artId : data.artId,
  //   Title : results.data.Title,
  //   content : results.data.content,
  //   description : results.data.description,
  //   profileDisplayName : results.data.profileDisplayName,
   }

  console.log(data);
  let response = await fetch(
    `${ArtAPI}/${art.artId}`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...art.artId,
      })
    }
  )

  return (
    <>
      <h1>Welcome to beautiful artttt!</h1>
      <div>

        {data.map((art) => 
          <p>{art.Title}</p>
        )

        }
         {/* <Card style={{ width: 250 }}>
          <Card.Img variant="top" src="holder.js/100px108" />
          <Card.Body>
            <Card.Title>{{Title}}</Card.Title>
            <Card.Text>{{profileDisplayName}}</Card.Text>
            <Card.Text>{{description}}</Card.Text>
            <Button variant="primary">See Details!</Button>
          </Card.Body>
          </Card>  */}
      </div>
    </>
  );
}
