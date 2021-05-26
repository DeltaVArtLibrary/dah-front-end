import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import React from 'react';



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

