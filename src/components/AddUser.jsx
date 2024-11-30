import React, { useState } from "react";

const AddUser = ({onAdd}) => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        age: 0,
        address: "",
    })

    return (
        <form>
            <input onChange={(event)=> setCurrentUser(prev => ({ ...prev, email: event.target.value }))} placeholder="email"/>
            <input onChange={(event)=> setCurrentUser(prev => ({ ...prev, age: event.target.value }))} placeholder="age"/>
            <textarea onChange={(event)=> setCurrentUser(prev => ({...prev, address: event.target.value}))} placeholder="address"/>

            <button onClick={() => onAdd(currentUser)} className="bigButton" type="button">+ Add +</button>
        </form>
    )
}

export default AddUser