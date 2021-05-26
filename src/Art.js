import useFetch from './hooks/useFetch';
// import Card from 'react-bootstrap/Card';
import './css/Art.css';
import React from 'react';



export default  function Art() {
  const { data } =  useFetch('https://digitalarthub.azurewebsites.net/api/Art');

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

