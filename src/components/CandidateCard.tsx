import { Card, ListGroup, Button } from "react-bootstrap";
import  Candidate  from "../interfaces/Candidate.interface";

const CandidateCard = ({ candidate, onSave, onNext }: { 
  candidate: Candidate; 
  onSave: () => void; 
  onNext: () => void; 
}) => {
  return (
    <Card style={{ width: "18rem", border: "2.5px solid black", backgroundColor: "white" }}>
      <Card.Img variant="top" src={candidate.avatar_url} alt="Candidate avatar" />
      <Card.Body>
        <Card.Title>{candidate.name || "Name not provided"}</Card.Title>
        <Card.Text>GitHub: <a href={candidate.html_url} target="_blank">{candidate.login}</a></Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>Location: {candidate.location || "Not provided"}</ListGroup.Item>
        <ListGroup.Item>Email: {candidate.email || "Not provided"}</ListGroup.Item>
        <ListGroup.Item>Company: {candidate.company || "Not provided"}</ListGroup.Item>
        <ListGroup.Item>Bio: {candidate.bio || "Not provided"}</ListGroup.Item>
      </ListGroup>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <Button style={{ backgroundColor: "red" }} onClick={onNext}>View Next Candidate</Button>
        <Button style={{ backgroundColor: "green" }} onClick={onSave}>Save Candidate</Button>
      </div>
    </Card>
  );
};

export default CandidateCard;
