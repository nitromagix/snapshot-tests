import { Button, Card } from "react-bootstrap";
import photo from '../me-20110320.jpg'
function GitHubCard() {
  const handleButtonClick = () => {
    alert("Martin wuz hear!")
  }

  return (
    <Card style={{ width: "18rem", border:"1px solid grey" }}>
      <Card.Img variant="top" src={photo}  style={{ width: "15rem" }}/>
      <Card.Body>
        <Card.Title>Nitromagix</Card.Title>
        <Card.Text>
          My name is Martin but I go by Nitromagix. I'm getting back into software dev after a long hiatus.
        </Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
