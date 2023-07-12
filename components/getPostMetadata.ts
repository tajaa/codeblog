import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetaData = (): PostMetadata[] => {
    const folder = "posts/" ;
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file)=> file.endsWith(".md"));
    

    //get gray matter data from each file
    const posts = markdownPosts.map((filename)=>{
    //map through each of the markdown posts
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf-8");
        //read through contents using readfilesync
        const matterResult = matter(fileContents);
        //call matter on entire file contents itself
       
        //return an object that makes the data more accessible to us
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: filename.replace(".md", ""),
        };
    });
    return posts;
}

export default getPostMetaData ;