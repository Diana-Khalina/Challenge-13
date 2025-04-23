import { Card, Button } from "react-bootstrap";
import Candidate from "../interfaces/Candidate.interface";

const CandidateCard = ({ candidate, onSave, onNext }: { 
  candidate: Candidate; 
  onSave: () => void; 
  onNext: () => void; 
}) => {
  return (
    <Card className="candidate-card">
      <Card.Img variant="top" src={candidate.avatar_url} alt="Candidate Avatar" />
      <Card.Body>
        <Card.Title>{candidate.name || "No Name"}</Card.Title>
        <Card.Text>GitHub: <a href={candidate.html_url} target="_blank">{candidate.login}</a></Card.Text>
        <Card.Text>Location: {candidate.location || "No Location"}</Card.Text>
        <Card.Text>Email: {candidate.email || "No Email"}</Card.Text>
        <Card.Text>Company: {candidate.company || "No Company"}</Card.Text>
      </Card.Body>
      <div className="button-group">
        <Button variant="success" onClick={onSave}>+</Button>
        <Button variant="danger" onClick={onNext}>-</Button>
      </div>
    </Card>
  );
};

export default CandidateCard;
