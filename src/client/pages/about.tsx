// import { response } from 'express';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const About: NextPage = (): JSX.Element => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users.length) {
      try {
        fetch('http://localhost:3000/users/list', {
          method: 'GET',
        }).then(async (response: any) => {
          const users = await response.json();
          setUsers(users);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [users]);

  return (
    <div className="content">
      <label>----About----</label>
      <br></br>
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default About;
