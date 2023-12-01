import { Card } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostGallery({ posts , deletePost, loggedUser, addLike}) {
    console.log({posts})
    const postCards = posts.map((post) => {
        return <PostCard post={post} key={post._id} deletePost={deletePost}  loggedUser={loggedUser}  addLike={addLike} /> 
   })
      
 
    return (
        <Card.Group>
          
        <br/>
           {postCards}
        </Card.Group>
    )


}