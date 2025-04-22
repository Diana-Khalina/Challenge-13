import { useState, useEffect } from "react";
import  Candidate  from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul className="list-unstyled">
          {savedCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} onSave={() => {}} onNext={() => {}} />
          ))}
        </ul>
      ) : (
        <h2 className="text-center text-muted">No saved candidates yet.</h2>
      )}
    </div>
  );
};

export default SavedCandidates;
