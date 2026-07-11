import IdeaCard from "./IdeaCard";

function IdeaList({ ideas }) {
  return (
    <section className="idea-list">
      {ideas.map((idea) => (
        <IdeaCard key={idea._key} idea={idea} />
      ))}
    </section>
  );
}

export default IdeaList;
