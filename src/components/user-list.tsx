import { useContext } from "react"
import { UserContext } from "../context/context"

export const UserList = () => {

    const context = useContext(UserContext)
    if(!context) {
        throw new Error("Error")
    }

    const {state, dispatch} = context


    return ( 
        <>
        <h1>UserList</h1>
        {
            state.users.map(user => 
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.salary}AMD</p>
                    <button onClick={() => dispatch({type: "users/delete", payload: user.id})}>x</button>
                </div>
            )
        }   
        </>
    )
}