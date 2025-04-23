import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedCandidates");
    setSavedCandidates(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} onSave={() => {}} onNext={() => {}} />
        ))
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
