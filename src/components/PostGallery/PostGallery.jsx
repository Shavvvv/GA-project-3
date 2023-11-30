import { Card } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostGallery({ posts }) {
    console.log({posts})
    const postCards = posts.map((post) => {
        return <PostCard post={post} key={post._id} /> 
   })
        console.log(postCards)
 
    return (
        <Card.Group>
            --All Posts----
        <br/>
           {postCards}
        </Card.Group>
    )


}