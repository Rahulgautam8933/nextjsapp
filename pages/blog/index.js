import Navbar from "@/components/Navbar"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

const blog = ({ data }) => {
    return (
        <>

            <Navbar />
            {data.slice(0, 5).map((curElement) => {
                return (
                    <div key={curElement.id}>
                        <h3>{curElement.id}</h3>
                        <Link href={`/blog/${curElement.id}`} >
                            <p>{curElement.title}</p>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default blog
