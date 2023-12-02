import { useState } from "react";

import { Button, Form } from "semantic-ui-react";

import postApi from "../../utils/postApi";

export default function AddPostForm({ addPost }) {
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
    album: "",
  });
  const [photo, setPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    const formData = new FormData();
    formData.append("photo", photo);
    let i = 1;
    for (let key in formState) {
      console.log(i++, key, formState[key]);
      formData.append(key, formState[key]);
    }

    addPost(formData);
  }

  function handleFile(e) {
    setPhoto(e.target.files[0]);
  }

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={formState.title}
          required
        />

        <Form.Input
          name="artist"
          onChange={handleChange}
          placeholder="Artist"
          value={formState.artist}
          required
        />

        <Form.Input
          name="album"
          value={formState.album}
          onChange={handleChange}
          placeholder="Album"
          required
        />
        <Form.Input onChange={handleFile} required type="file" />

        <Button type="submit">ADD</Button>
      </Form>
    </>
  );
}
