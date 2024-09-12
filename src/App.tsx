import { useReducer } from 'react'
import './App.css'
import { AddUser } from './components/add-user'
import { UserList } from './components/user-list'
import { reducer } from './context/reducer'
import { initialState, UserContext } from './context/context'



export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  



  return (
    <>

      <UserContext.Provider value={{state, dispatch}}>

      <AddUser/>

      <UserList/>
      
      </UserContext.Provider>
    </>
  )
}