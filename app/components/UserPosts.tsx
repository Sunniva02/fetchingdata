import React from 'react'
interface UserPostsProps {
    promise: Promise<Array<{ id: number; title: string; body: string }>>;
}
export default async function UserPosts({ promise }: UserPostsProps) {
    const posts = await promise
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
