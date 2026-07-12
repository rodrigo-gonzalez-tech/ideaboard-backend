import { useEffect, useState } from "react";
import { getIdeas, createIdea } from "../api/ideas";
import IdeaForm from "../components/IdeaForm";
import IdeaList from "../components/IdeaList";

function Home() {
  const [ideas, setIdeas] = useState([]);

  const loadIdeas = async () => {
    try {
      const data = await getIdeas();
      setIdeas(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateIdea = async (newIdea) => {
    try {
      const createdIdea = await createIdea(newIdea);

      setIdeas((currentIdeas) => [createdIdea, ...currentIdeas]);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    void loadIdeas();
  }, []);

  return (
    <main>
      <header className="page-header">
        <h1>💡 Idea Board</h1>
        <p>Share and discover great ideas.</p>
      </header>

      <IdeaForm onCreateIdea={handleCreateIdea} />

      <IdeaList ideas={ideas} />
    </main>
  );
}

export default Home;
