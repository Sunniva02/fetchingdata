import Link from "next/link"



export default async function Home() {

  return (
    <div className=" mt-20 text-center">
      <h1 className="text-5xl font-bold">Home</h1>
      <Link href="/users">Go to Users</Link>
      <br></br>
      <Link href="/dogs">Go to Dogs</Link>
    </div>


  )
}
