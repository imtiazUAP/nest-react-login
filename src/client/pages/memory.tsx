// import { response } from 'express';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Button from '@mui/material/Button';
import { Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';
import styles from '../styles/memory.module.css';

const Memory: NextPage = (): JSX.Element => {
  const [memory, setMemoryDetail] = useState({
    id: 0,
    description: '',
  });
  const [editMode, toggleEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  if (
    id &&
    (!memory.hasOwnProperty('id') ||
      (memory.hasOwnProperty('id') && Number(memory.id) !== Number(id)))
  ) {
    fetch(`http://localhost:3001/memories/${id}`, {
      mode: 'no-cors',
      method: 'GET',
    }).then(async (response: any) => {
      const memory = await response.json();
      setMemoryDetail(memory);
    });
  }
  console.log('--- editMode 1: ', editMode);

  return (
    <div className="content">
      {!editMode && memory && <div>{memory.description}</div>}
      {editMode && (
        <div>
          <ThemeProvider theme={myTheme}>
            {/* <MUIRichTextEditor
              label="Type something here..."
              onSave={() => {}}
              inlineToolbar={true}
            /> */}
          </ThemeProvider>
        </div>
      )}
      {/* <div className={styles.saveButton}> */}
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleEditMode(!editMode)}
        >
          {editMode ? 'Save' : 'Edit'}
        </Button>
      </div>
    </div>
  );
};

export default Memory;
