import IdeaCard from "./IdeaCard";

function IdeaList({ ideas }) {
  return (
    <section className="idea-list">
      {ideas.map((idea) => (
        <IdeaCard key={idea._id} idea={idea} />
      ))}
    </section>
  );
}

export default IdeaList;
