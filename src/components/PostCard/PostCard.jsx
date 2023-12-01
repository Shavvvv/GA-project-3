import { Button, Card } from "semantic-ui-react"
export default function PostCard({ post, deletePost, loggedUser , addLike }) {


    if (post.user._id === loggedUser._id) { 

             console.log( `post  maker ${post.user._id}`)
     }
     const postCreator = (post.user._id === loggedUser._id)
    function showDELETE() {
   
        if (postCreator) {
            return (
                <Button onClick={() => deletePost(post._id)}>
                    X
                </Button>
            );
        }

}

   console.log(postCreator)
   
    return (
        <Card>
           
            <br/>
            ----<br />
            {post.title}
            {post.artist}
            {post.album}
            <img src={post.photoUrl}  />
            <br />
            

            <Button  onClick={()=> addLike(post._id)} > Like</Button>

            {postCreator ?(
               <Button onClick={() => deletePost(post._id)}> 
               X
           </Button>
            )  : null
          
        }
          
            
        </Card>
    )
}

