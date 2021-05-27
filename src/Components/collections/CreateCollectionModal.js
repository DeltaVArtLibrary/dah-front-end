import { Button, Modal } from "bootstrap";
import { useState } from "react";
import { CloseButton, Form } from "react-bootstrap";

export default function CreateCollectionModal(){
  const [showForm, setShowForm] = useState();

  function showCreate() {
    setShowForm("Create");
  }
  function showAdd(){
    setShowForm("Add")
  }
  function hideModal() {
    setShowForm(null);
  }

  return(
    <>
    <Button variant="primary" onClick={showCreate}>Create Collection</Button>
    <Button variant="primary" onClick={showAdd}>Add To Collection</Button>
    <Modal show = {showForm} onHide = {hideModal}>
      <Modal.Header> 
        <Modal.Title>
          {showForm === 'Create'?'Create':'Add to'} Collection
        </Modal.Title>
        <CloseButton onClick= {hideModal}/>  
      </Modal.Header>
      <Modal.Body>
        {showForm === 'Create' && <Create />}
        {showForm === 'Add' && <Add/>}
      </Modal.Body>
    </Modal>
    </>
  )
}

function Create(){
  return(
    <>
      {/* Add Component to handle creationg of a collection (maybe look to CreateArt.js for help) */}
    </>
  )
}

function Add(){
  return(
    <>
      {/* Add Component to handle adding art to a collection (probably use this on an art card not collection page) */}
    </>
  )
}