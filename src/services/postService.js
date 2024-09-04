export async function FetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    //response good-parse it and await
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
