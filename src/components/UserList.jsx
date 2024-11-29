import React, { useState } from "react";
import User from "./User";

const UserList = () => {
    const [us, setUs] = useState([
        {
            id: 0,
            balance: "$2,775.07",
            age: 34,
            email: "forddotson@confrenzy.com",
            address: "560 Times Placez, Succasunna, Maine, 2834"
        },
        {
            id: 1,
            balance: "$1,644.85",
            age: 29,
            email: "forddotson@confrenzy.com",
            address: "133 Dupont Street, Elrama, Hawaii, 1029"
        },
        {
            id: 2,
            balance: "$2,188.03",
            age: 33,
            email: "forddotson@confrenzy.com",
            address: "724 Hyman Court, Dellview, Palau, 8659"
        },
        {
            id: 3,
            balance: "$9,834.23",
            age: 33,
            email: "coupppurtoiiuyttree@wertoiu.com",
            address: "102 Orenburg Street, Uittro, Palau, 555"
        }
    ])

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