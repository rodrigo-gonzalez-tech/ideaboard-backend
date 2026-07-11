function IdeaCard({ idea }) {
  return (
    <article className="idea-card">
      <p className="idea-text">{idea.text}</p>
      <div className="idea-footer">
        <span className="tag">{idea.tag || "General"}</span>
        <span className="username">
          {idea.username ? `@${idea.username}` : "Anonymous"}
        </span>
      </div>
    </article>
  );
}

export default IdeaCard;
