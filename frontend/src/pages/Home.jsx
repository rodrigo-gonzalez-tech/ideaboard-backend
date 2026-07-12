import { useEffect, useState } from "react";
import { getIdeas } from "../api/ideas";
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

  useEffect(() => {
    void loadIdeas();
  }, []);

  return (
    <main>
      <header className="page-header">
        <h1>Idea Board</h1>
        <p>Share and discover great ideas.</p>
      </header>

      <IdeaForm />

      <IdeaList ideas={ideas} />
    </main>
  );
}

export default Home;
