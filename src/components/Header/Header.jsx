import { Header, Form, Button } from "semantic-ui-react";
import userService from "../../utils/userService";

export default function PageHeader() {
  function signOut() {
    userService.logout();
  }

  return (
    <Header>
      {" "}
      Header
      <Button onClick={signOut} type="submit">
        logout
      </Button>
    </Header>
  );
}
