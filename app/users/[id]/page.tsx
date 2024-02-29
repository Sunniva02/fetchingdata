import getUser from "@/app/libs/getUser"
import getUserPosts from "@/app/libs/getUserPosts"


export default async function UserPage({ params: { id } }) {
  // const userData = await getUser(id)
  // initiate both request in parallel
  const userData = getUser(id)
  const userPosts = getUserPosts(id)

  //wait for both requests to complete
  const [user, posts] = await Promise.all([userData, userPosts])

  return (
    <div>
      <h1 className="text-5xl font-bold">User Information</h1>
      <p className="text-3xl mt-10">{user.name}</p>
      {posts.map(post => {
        return (
          <p key={post.id} className="text-3xl mt-10">{post.title}</p>
        )
      })}
    </div>
  )
}
