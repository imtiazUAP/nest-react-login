// import { response } from 'express';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Users: NextPage = (): JSX.Element => {
  const [memory, setMemoryDetail] = useState({
    id: 0,
    description: '',
  });
  const router = useRouter();
  const { id } = router.query;

  if (
    id &&
    (!memory.hasOwnProperty('id') ||
      (memory.hasOwnProperty('id') && Number(memory.id) !== Number(id)))
  ) {
    fetch(`http://localhost:3000/memories/${id}`, {
      method: 'GET',
    }).then(async (response: any) => {
      const memory = await response.json();
      setMemoryDetail(memory);
    });
  }

  return (
    <div className="content">
      <label>{memory.description}</label>
    </div>
  );
};

export default Users;
