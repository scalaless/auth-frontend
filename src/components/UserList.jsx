import React, { useState } from "react";
import User from "./User";

const UserList = ({us}) => {
    return (
        <div>
            {
                us.length > 0 ? 
                us.map((u) => <User key={u.id} user={u} />)  :
                <div className="user">
                    <h3>Users list is empty.</h3>
                </div>
            }
        </div>
    )
}

export default UserList