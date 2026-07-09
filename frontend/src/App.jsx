import { useEffect, useState } from "react";
import { getIdeas } from "./api/ideas";

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    async function loadIdeas() {
      try {
        const data = await getIdeas();
        setIdeas(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadIdeas();
  }, []);

  return (
    <>
      <h1>IdeaBoard</h1>

      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>{idea.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
