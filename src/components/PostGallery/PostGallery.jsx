import { Card } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostGallery({ posts , deletePost, loggedUser}) {
    console.log({posts})
    const postCards = posts.map((post) => {
        return <PostCard post={post} key={post._id} deletePost={deletePost}  loggedUser={loggedUser} /> 
   })
      
 
    return (
        <Card.Group>
            --All Posts----
        <br/>
           {postCards}
        </Card.Group>
    )


}