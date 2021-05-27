import { Card, Button, Accordion } from 'react-bootstrap';

export default function CollectionCard(data) {
  
  
  return(
    <Card className='Collection-Card'>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        {/* <Card.Subtitle>{data.profileDisplayName}</Card.Subtitle> */}
        <Card.Text>
          {data.description}
        </Card.Text>
        <Accordion>
          <Accordion.Toggle as={Button} variant={data.art.length?"primary":"secondary"} eventKey={data.collectionId} disabled={data.art.length===0}>View: {data.art.length}</Accordion.Toggle>
          <Accordion.Collapse eventKey={data.collectionId}>
            <div>
            {data.art.map((art) => 
              <div>{art.title}</div>
            )}
            </div>
          </Accordion.Collapse>
        </Accordion>
            
        
      </Card.Body>
      <Card.Footer>Literally whatever I want</Card.Footer>
    </Card>
  )
}
