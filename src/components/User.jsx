import React from "react";
import { IoMdCloseCircle,  } from "react-icons/io";
import "../css/main.css"
import { FaEdit } from "react-icons/fa";

const User = ({ user, onRemove }) => {
    return (<div className="user">
        <IoMdCloseCircle onClick={()=> onRemove(user.id)} className="deleteIcon"/>
        <FaEdit className="editIcon"/>
        <h3>{user.id}. {user.email}</h3>
        <p>{user.balance}</p>
        <b style={{ fontSize: "30px" }}>{user.age > 30 ? "☺" : "☻"}</b>
    </div>)
}

export default User