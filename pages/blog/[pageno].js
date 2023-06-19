import Navbar from "@/components/Navbar";
import { useRouter } from "next/router"

export const getStaticPaths = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curelem) => {
        return {
            params: {
                pageno: curelem.id.toString(),
            },
        };
    });
 

    return {
        paths,
        fallback: false,
    };

};


export const getStaticProps = async (context) => {
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data, 
        },
    };
};




const pageno = ({data}) => {
    
    return (
        <>
            <Navbar />
            <div  key={data.id}>
            
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            </div>
        </>
    )
}

export default pageno
