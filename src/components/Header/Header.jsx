import { Header, Form, Button } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";


export default function PageHeader() {
  
  const navigate = useNavigate();

  function signOut() {
    userService.logout();
   navigate('/login')
  }

  return (
    <Header>
      {" "}
      Header
      <Button onClick={signOut } type="submit">
        logout
      </Button>
    </Header>
  );
}
