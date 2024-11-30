import React, { useState } from "react";
import { IoMdCloseCircle, } from "react-icons/io";
import "../css/main.css"
import { FaEdit } from "react-icons/fa";
import AddUser from "./AddUser";

const User = ({ user, onRemove, onEdit }) => {
    const [isEditFormOpen, setIsEditFormOpen] = useState(false)

    return (<div className="user">
        <IoMdCloseCircle onClick={() => onRemove(user.id)} className="deleteIcon" />
        <FaEdit onClick={() => {
            setIsEditFormOpen((prev) => !prev)
        }} className="editIcon" />
        <h3>{user.id}. {user.email}</h3>
        <p>{user.balance}</p>
        <b style={{ fontSize: "30px" }}>{user.age > 30 ? "☺" : "☻"}</b>

        {isEditFormOpen &&
            <AddUser onAdd={onEdit}/>
        }
    </div>)
}

export default User