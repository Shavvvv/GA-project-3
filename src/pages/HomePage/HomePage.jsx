

export default function HomePage({loggedUser}) {

console.log({loggedUser})

    if({loggedUser}){
    return (
        <h1>Home Pageeeeeeeeeee</h1>

        );
    } else {
        return (

            <h1>not logged in</h1>
        )
            
        
    }
}