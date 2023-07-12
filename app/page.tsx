import getPostMetaData from "@/components/getPostMetadata";
import Link from "next/link";
import PostPreview from "@/components/PostPreview";


const HomePage = () => {
    const postMetadata = getPostMetaData();
    const postPreviews = postMetadata.map((post)=>(
        <PostPreview key={post.slug} {...post}/>
        // <PostPreview key={post.slug}
        // title={post.title}
        // subtitle={post.subtitle}
        // slug={post.slug}
        // date={post.date}/>
    ))
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
}
 
export default HomePage;