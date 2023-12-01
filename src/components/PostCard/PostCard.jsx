import { Button } from "semantic-ui-react"
export default function PostCard({ post, deletePost, loggedUser }) {


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
        <>
           
            <br/>
            ----<br />
            {post.title}
            {post.artist}
            {post.album}
            <img src={post.photoUrl} />
            <br />
            

            {postCreator ?(
                <Button> x</Button>
            )  : null
          
        }
          
            
        </>
    )
}
/*
<Button onClick={() => deletePost(post._id)}> 
                X
            </Button>*/