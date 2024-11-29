import React from "react";

const AddUser = () => {
    return (
        <form>
            <input placeholder="email"/>
            <input placeholder="age"/>
            <textarea placeholder="address"/>

            <button type="button">+ Add +</button>
        </form>
    )
}

export default AddUser