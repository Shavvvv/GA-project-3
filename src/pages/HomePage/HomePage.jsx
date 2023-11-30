import PageHeader from "../../components/Header/Header"
import { useState, useEffect } from "react";
import tokenService from "../../utils/tokenService";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
export default function HomePage({loggedUser}) {

        const [posts, setPosts] = useState([]);
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
    
 
    return (
            <>
        <PageHeader/>
                    <h1>Home Pageeeeeeeeeee</h1>
                    <AddPostForm addPost={addPost} />
</>
        )
}