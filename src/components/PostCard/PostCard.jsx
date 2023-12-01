import { Button } from "semantic-ui-react"
export default function PostCard({ post, deletePost }) {


    console.log( `post ${post._id}`)

   
   
    return (
        <>
           
            <br/>
            ----<br />
            {post.title}
            {post.artist}
            {post.album}
            <img src={post.photoUrl} />
            <br/>
            <Button  onClick={()=>deletePost(post._id)}> 
                X
          </Button>
        </>
    )
}