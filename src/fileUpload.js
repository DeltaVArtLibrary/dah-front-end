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
    
    const response = await fetch('https://localhost:5001/api/file')
    const form-data = await response.json();
      console.log(form-data);
  }


  return(
  <>
    <input type="file" onChange={saveFile} />
    <input type="button" value="upload" onClick={uploadFile} />
  </>
  );
}

