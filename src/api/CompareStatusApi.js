const baseUrl = new URL("https://three-view-my-startup-3team-be.onrender.com");
const query = new URLSearchParams();

export async function getStartupsList({ limit, offset, order }) {
  try {
    query.set("limit", limit || 10);
    query.set("offset", offset || 0);
    query.set("order", order || "id");

    const response = await fetch(`${baseUrl}api/startups?${query.toString()}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    return { startups: [], totalPages: 1, currentPage: 1 };
  }
}
