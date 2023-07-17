
import './App.css';
import FormInput from './components/FormInput';
import React,{useState} from 'react';
import UserList from './components/UserList';
const App=()=>{
  const [usersList, setUsersList]= useState([]);
  const addUserHandler =(userName, userAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];

    })
  }
  return ( 
    
    <div className='user-form'>
    <FormInput onAddUser= {addUserHandler}/>
    <UserList users={usersList} />
    </div>
  )
}

export default App;
