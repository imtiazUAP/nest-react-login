import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SideBar() {
  //     const [users, setUsers] = useState([]);

  //     useEffect(() => {
  //       if (!users.length) {
  //           try {
  //               fetch('http://localhost:3000/users/list', {
  //                   method: 'GET',
  //                 }).then(async (response: any) => {
  //                   const users = await response.json();
  //                   setUsers(users);
  //                 });
  //           } catch (error) {
  //               console.log(error);
  //           }
  //       }
  //     }, [users]);

  //   return <>
  //             <div className="sidebar">
  //                 {users.map((user) => (
  //                     <Link key={user.id} href={`/user?id=${user.id}`}>{user.name}</Link>
  //                 ))}
  //             </div>
  //         </>;

  const [memories, setMemories] = useState([]);

  useEffect(() => {
    if (!memories.length) {
      try {
        fetch('http://localhost:3000/memories/list', {
          method: 'GET',
        }).then(async (response: any) => {
          const memories = await response.json();
          setMemories(memories);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [memories]);

  return (
    <>
      <div className="sidebar">
        {memories.map((memory) => (
          <Link key={memory.id} href={`/memory?id=${memory.id}`}>
            {memory.title}
          </Link>
        ))}
      </div>
    </>
  );
}
