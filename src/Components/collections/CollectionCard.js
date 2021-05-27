import { Card, Button, Accordion, CardColumns} from 'react-bootstrap';
import { ArtCard } from "../../Art";

export default function CollectionCard(data) {
  
  return(
    <Card className='Collection-Card' key={data.collectionId}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        {/* <Card.Subtitle>{data.profileDisplayName}</Card.Subtitle> */}
        <Card.Text>
          {data.description}
        </Card.Text>
        <Accordion>
          <Accordion.Toggle as={Button} variant={data.art.length?"primary":"secondary"} eventKey={data.collectionId} disabled={data.art.length===0}>View: {data.art.length}</Accordion.Toggle>
          <Accordion.Collapse eventKey={data.collectionId}>
            <CardColumns className="CardLineup">
            {data.art.map((art) => 
              <ArtCard art={art} />
            )}
            </CardColumns>
          </Accordion.Collapse>
        </Accordion>
            
        
      </Card.Body>
    </Card>
  )
}
