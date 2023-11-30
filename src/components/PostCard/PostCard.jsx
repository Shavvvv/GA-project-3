export default function PostCard({ post }) {


    console.log( post)


   
    return (
        <>
           
            <br/>
            ----<br />
            {post.title}
            {post.artist}
            {post.album}
            <img src={post.photoUrl} />
            <br/>
          
        </>
    )
}