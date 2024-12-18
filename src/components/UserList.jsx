import React, { useState } from "react";
import User from "./User";

const UserList = ({us, onRemove, onEdit}) => {
    return (
        <div>
            {
                us.length > 0 ? 
                us.map((u) => <User onEdit={onEdit} onRemove={onRemove} key={u.id} user={u} />)  :
                <div className="user">
                    <h3>Users list is empty.</h3>
                </div>
            }
        </div>
    )
}

export default UserList