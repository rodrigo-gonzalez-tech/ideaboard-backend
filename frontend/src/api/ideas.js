const API_URL = "http://localhost:5000/api/ideas";

export async function getIdeas() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch ideas.");
  }

  const result = await response.json();
  return result.data;
}
