import React, { useReducer } from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, key) => (
          <li key={user.id} >
            {user.name}, {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
