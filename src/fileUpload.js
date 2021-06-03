import React, {useState} from "react";

export const FileUpload = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    console.log(file);
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append("fileName", fileName);
    
    fetch("https://localhost:5001/api/file",
    {
      body: formData,
      method: "post"
    })
    //receiving formData, NOT json
      console.log(formData);
  }


  return(
  <>
    <input type="file" onChange={saveFile} />
    <input type="button" value="upload" onClick={uploadFile} />
  </>
  );
}

