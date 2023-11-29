import { useState } from "react"

import { Button, Form } from "semantic-ui-react"

export default function AddPostForm() {

    const [formState, setFormState] = useState({
        title: '',
        artist: '',
        album: ''
    })

    function handleSubmit(e) {
    
        e.preventDefault()
        console.log(formState)
}



    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                
                <Form.Input
                    name='title'
                      onChange={handleChange}
                    placeholder="title"
                    value={formState.title}
                />
                    

                <Form.Input 
                    name='artist'
                    onChange={handleChange}
                    placeholder="Artist"
                    value={formState.artist}
                />

                <Form.Input
                    name='album'
                    value={formState.album}
                      onChange={handleChange}
                    placeholder="Album"
                   
                />


                <Button type="submit">
                    ADD
                </Button>
        </Form>
        </>
    )
}