import PageHeader from "../../components/Header/Header"
import { useState, useEffect } from "react";
import tokenService from "../../utils/tokenService";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostGallery from "../../components/PostGallery/PostGallery";
export default function HomePage({loggedUser}) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getPosts();
    }, [])
console.log({loggedUser})
async function addPost(formData) {
        try {
            // HTTP REQUEST IS GOING TO THE SERVER
            const response = await fetch("/api/post", {
                method: "POST",
                body: formData,
                headers: {
                    // convention for sending jwts in a fetch request
                    Authorization: "Bearer " + tokenService.getToken(),
                    // We send the token, so the server knows who is making the
                    // request
                },
            });
    
            const data = await response.json();
            // ====================================================
            // The HTTP cycle has been completed
            // and we have a parsed response from the server (data)
            console.log(data, " <- response data from the server");
    
            // Now we can update the state!
            setPosts([data.post, ...posts]);
        } catch (err) {
            console.log(err);
        }
    }
    
    async function getPosts() {
        try {
          const response = await fetch("/api/post", {
            method: "GET",
            headers: {
              // convention for sending jwts in a fetch request
              Authorization: "Bearer " + tokenService.getToken(),
              // We send the token, so the server knows who is making the
              // request
            },
          });
    
          const data = await response.json();
          // AFTER THIS WE HAVE THE DATA BACK FROM SERVER
          // CHECK THE DATA then update state!
          console.log(data);
          setPosts(data.posts);
        } catch (err) {
          console.log(err);
        }
    }
  
  
  async function deletePost(postID) {
    try { 
      const response = await fetch(`/api/post/${postID}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + tokenService.getToken()
        }
      })
      
      getPosts()
    } catch (err) {
      
    }

  }

  async function addLike(postId) {
    try {
      const responseFromTheServer = await fetch(`/api/post/${postId}/likes`, {
        method: "POST",
        headers: {
          // convention for sending jwts in a fetch request
          Authorization: "Bearer " + tokenService.getToken(),
          // We send the token, so the server knows who is making the
          // request
        },
      });

      const data = await responseFromTheServer.json(); // <- taking the json from server
      // and turning into a regular object
      console.log(data);
      getPosts(); // < call getPOsts to get the updated posts from the server, this updates states
      // so we can see our like
    } catch (err) {
      console.log(err);
    }
  }

 
    return (
            <>
        <PageHeader/>
            
            <AddPostForm addPost={addPost} />
        <PostGallery posts={posts} deletePost={deletePost} loggedUser={loggedUser}  addLike={addLike} />
</>
        )
}
