import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetadata";
import "styles/markdown.css"



const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post)=> ({
        slug: post.slug
    }));
}

const PostPage = (props:any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
        <h1 className="text-2xl text-orange-500"> {post.data.title}</h1>
        <article className="prose lg:prose-xl">
        <Markdown className="text-slate-300">
            {post.content}
        </Markdown>
        </article>
        
    </div>
    ); 
};

export default PostPage;