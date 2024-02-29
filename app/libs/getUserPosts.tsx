export default async function getUserPosts(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    if (!response.ok) {
        throw new Error("Failed to fetch user posts")

    }
    return response.json()
}