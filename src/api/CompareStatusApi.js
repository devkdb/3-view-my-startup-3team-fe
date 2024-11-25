const baseUrl = new URL("https://three-view-my-startup-3team-be.onrender.com");
const query = new URLSearchParams();

export async function getStartupsList({ limit, offset, order }) {
  try {
    // undefined를 기본값으로 처리
    query.set("limit", limit || 10); // 기본값 10 설정
    query.set("offset", offset || 0); // 기본값 0 설정
    query.set("order", order || "id"); // 기본값 'id' 설정

    const response = await fetch(`${baseUrl}api/startups?${query.toString()}`);
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    return { startups: [], totalPages: 1, currentPage: 1 }; // 예외 처리
  }
}
