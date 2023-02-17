// import { response } from 'express';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Users: NextPage = (): JSX.Element => {
  const [user, setUserDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;

if (id && (!user.hasOwnProperty('id') || (user.hasOwnProperty('id') && Number(user.id) !== Number(id)))) {
    fetch(`http://localhost:3001/users/${id}`, {
        method: 'GET',
    }).then(async (response: any) => {
        const user = await response.json();
        console.log('---- user detail: ', user);
        setUserDetail(user);
    });
}

  return (
    <div className="content">
      <label>----Users Detail----</label>
      <br></br>
      <label>{user.password}</label>
      <br></br>
    </div>
  );
};

export default Users;
