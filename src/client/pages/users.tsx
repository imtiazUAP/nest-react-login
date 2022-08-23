import { response } from "express";
import { NextPage } from "next";
import React, { useEffect, useState} from "react";

const Users: NextPage = (): JSX.Element => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!users.length) {
            fetch('/users/list', {
                method: 'GET',
            }).then(async (response: any) => {
                const users = await response.json();
                setUsers(users);
            })
        }
    }, [users]);

    return(
        <div>
            <label>----Users list----</label>
            <br></br>
            {users.map((user) => (
                <div>
                    <label>{user.id}</label>
                    <br></br>
                </div>
            ))}
        </div>
    )
}

export default Users