import Image from "next/image"

async function getDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
        cache: 'no-cache'
    })
    const data = await response.json()
    return data
}

export default async function Home() {
    const dogs = await getDogs()
    console.log(dogs)
    return (
        <div className=" mt-20 text-center">
            <h1 className="text-5xl font-bold">Dog Fetch</h1>
            <Image width={500} height={500} src={dogs.message} alt="dogs" priority />
        </div>


    )
}