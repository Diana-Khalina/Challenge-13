import { useState } from "react";
import { searchGithubUser } from "../api/API";
import CandidateCard from "../components/CandidateCard";
import  Candidate  from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Capture user input
  const [candidate, setCandidate] = useState<Candidate | null>(null); // Store the searched candidate

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return; // Prevent empty searches
    try {
      const result = await searchGithubUser(searchTerm);
      setCandidate(result); // Display searched candidate
    } catch (error) {
      console.error("Error fetching candidate:", error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Search for a GitHub User</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter GitHub username..." 
        className="form-control mb-2"
      />
      <button className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>

      {candidate ? (
        <CandidateCard candidate={candidate} onSave={() => {}} onNext={() => {}} />
      ) : (
        <h2 style={{ textAlign: "center", fontWeight: "bold", color: "gray" }}>
          No candidate found. Try searching!
        </h2>
      )}
    </div>
  );
};

export default CandidateSearch;
