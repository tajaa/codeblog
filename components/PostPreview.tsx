import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-700 p-4 rounded-md shadow-md 
        bg-slate-900">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-orange-400 hover:underline">{props.title}</h2>
        </Link>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
    </div>
    )

}

export default PostPreview;