import React, { useRef, useState } from "react";

const AddUser = ({onAdd}) => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        age: 0,
        address: "",
    })

    const myForm = useRef(null)

    return (
        <form ref={myForm}>
            <input onChange={(event)=> setCurrentUser(prev => ({ ...prev, email: event.target.value }))} placeholder="email"/>
            <input onChange={(event)=> setCurrentUser(prev => ({ ...prev, age: event.target.value }))} placeholder="age"/>
            <textarea onChange={(event)=> setCurrentUser(prev => ({...prev, address: event.target.value}))} placeholder="address"/>

            <button onClick={() => {
                myForm.current.reset()
                onAdd(currentUser)
            }} className="bigButton" type="button">+ Add +</button>
        </form>
    )
}

export default AddUser