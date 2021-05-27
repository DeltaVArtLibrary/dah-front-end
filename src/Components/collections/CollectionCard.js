import { Card, Button, Accordion, CardColumns} from 'react-bootstrap';
import { ArtCard } from "../../Art";

export default function CollectionCard(props) {
  const {collection} = props;
  return(
    <Card className='Collection-Card' key={collection.collectionId}>
      <Card.Body>
        <Card.Title>{collection.title}</Card.Title>
        {/* <Card.Subtitle>{collection.profileDisplayName}</Card.Subtitle> */}
        <Card.Text>
          {collection.description}
        </Card.Text>
        <Accordion>
          <Accordion.Toggle as={Button} variant={collection.art.length?"primary":"secondary"} eventKey={collection.collectionId} disabled={collection.art.length===0}>View: {collection.art.length}</Accordion.Toggle>
          <Accordion.Collapse eventKey={collection.collectionId}>
            <CardColumns className="CardLineup">
            {collection.art.map((art) => 
              <ArtCard art={art} key={art.artId} />
            )}
            </CardColumns>
          </Accordion.Collapse>
        </Accordion>
            
        
      </Card.Body>
      <Card.Footer>{collection.profile.displayName}</Card.Footer>
    </Card>
  )
}
