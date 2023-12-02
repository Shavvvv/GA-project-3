import { Button, Card, Image } from "semantic-ui-react";
export default function PostCard({ post, deletePost, loggedUser, addLike }) {
  if (post.user._id === loggedUser._id) {
    console.log(`post  maker ${post.user._id}`);
  }
  const postCreator = post.user._id === loggedUser._id;
  function showDELETE() {
    if (postCreator) {
      return <Button onClick={() => deletePost(post._id)}>X</Button>;
    }
  }

  console.log(postCreator);

  return (
    <Card>
      <Card.Content> {post.title}</Card.Content>

      <Card.Content>
        {" "}
        <Image size="large" src={post.photoUrl} />
      </Card.Content>
      <Card.Content>{post.artist}</Card.Content>
<Card.Content> {post.album}</Card.Content>
     
      <Card.Content>
        {" "}
        <Button onClick={() => addLike(post._id)}> Like</Button>
        {postCreator ? (
          <Button onClick={() => deletePost(post._id)}>X</Button>
        ) : null}{" "}

       by: {post.user.username}
      </Card.Content>
    </Card>
  );
}
