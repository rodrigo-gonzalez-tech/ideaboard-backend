const API_URL = "http://localhost:5000/api/ideas";

export async function getIdeas() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch ideas.");
  }

  const result = await response.json();
  return result.data;
}

export async function createIdea(idea) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idea),
  });

  if (!response.ok) {
    throw new Error("Failed to create idea.");
  }

  const result = await response.json();

  return result.data;
}
