import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const users = await searchGithub();
        const detailedCandidates = await Promise.all(
          users.map(async (user: { login: string; id: number; avatar_url: string }) => {
            const extra = await searchGithubUser(user.login);
            return {
              id: user.id,
              name: extra.name || "No Name",
              username: user.login,
              login: user.login,
              location: extra.location || "No Location",
              avatar_url: user.avatar_url,
              email: extra.email || "No Email",
              html_url: extra.html_url,
              company: extra.company || "No Company",
            } as Candidate;
          })
        );

        setCandidates(detailedCandidates);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleSave = () => {
    if (currentIndex >= candidates.length) return;

    const stored = localStorage.getItem("savedCandidates");
    const savedCandidates = stored ? JSON.parse(stored) : [];
    savedCandidates.push(candidates[currentIndex]);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));

    setCurrentIndex(currentIndex + 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentIndex < candidates.length ? (
        <CandidateCard candidate={candidates[currentIndex]} onSave={handleSave} onNext={handleNext} />
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
