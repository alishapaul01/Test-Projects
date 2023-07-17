import React from "react";
import './UserList.css';

const UserList = props => {
    return (
      <ul className="users">
        {props.users.map((user) => (
          <li key ={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserList;