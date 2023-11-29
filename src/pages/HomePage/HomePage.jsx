import PageHeader from "../../components/ErrorMessage/Header/Header";
import Header from "../../components/ErrorMessage/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
export default function HomePage({loggedUser}) {

console.log({loggedUser})

 
    return (
            <>
        <PageHeader/>
                    <h1>Home Pageeeeeeeeeee</h1>
                    <AddPostForm/>
</>
        )
}