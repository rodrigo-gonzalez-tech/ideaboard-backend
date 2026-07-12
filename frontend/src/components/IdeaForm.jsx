import { useState } from "react";

function IdeaForm({ onCreateIdea }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    text: "",
    tag: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await onCreateIdea(formData);

      setFormData({
        text: "",
        tag: "",
        username: "",
      });

      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="idea-form-card">
      {!isOpen ? (
        <button
          type="button"
          className="idea-form-toggle"
          onClick={() => setIsOpen(true)}
        >
          + Share a new idea
        </button>
      ) : (
        <>
          <div className="idea-form-header">
            <h2>Share a new idea</h2>

            <button
              type="button"
              className="close-button"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="text">Idea</label>

            <textarea
              id="text"
              name="text"
              rows="4"
              required
              value={formData.text}
              onChange={handleChange}
            />

            <label htmlFor="tag">Category</label>

            <input
              id="tag"
              name="tag"
              type="text"
              value={formData.tag}
              onChange={handleChange}
            />

            <label htmlFor="username">Username</label>

            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />

            <button type="submit" className="submit-button">
              Add Idea
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default IdeaForm;
