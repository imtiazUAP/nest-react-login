import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SideBar() {
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
        {memories.map((memory) => {
          const desc = JSON.parse(memory.description);
          const parsedDescription = JSON.parse(desc);
          return (
            <Link key={memory.id} href={`/memory?id=${memory.id}`}>
              {parsedDescription.blocks[0].text.substring(0, 20)}
            </Link>
          );
        })}
      </div>
    </>
  );
}
