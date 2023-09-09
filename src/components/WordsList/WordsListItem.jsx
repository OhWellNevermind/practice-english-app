import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { WordsContext } from 'components/App';

export const WordsListItem = ({ enWord, ukWord, onDeleteWord, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [edditedEnWord, setEdditedEnWord] = useState(enWord);
  const [edditedUkWord, setEdditedUkWord] = useState(ukWord);

  const { handelEditWord } = useContext(WordsContext);

  const handleEdit = () => {
    setIsEditMode(prev => !prev);
    if (edditedUkWord !== ukWord || edditedEnWord !== enWord) {
      handelEditWord({ id, ukWord: edditedUkWord, enWord: edditedEnWord });
    }
  };

  const editEnWord = evt => {
    setEdditedEnWord(evt.target.value);
  };
  const editUkWord = evt => {
    setEdditedUkWord(evt.target.value);
  };

  return (
    <li>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '6px 20px' }}>
          {isEditMode ? (
            <TextField
              variant="outlined"
              value={edditedEnWord}
              onChange={editEnWord}
            />
          ) : (
            <span>{enWord}</span>
          )}
        </div>
        :
        <div style={{ margin: '6px 20px' }}>
          {isEditMode ? (
            <TextField
              variant="outlined"
              value={edditedUkWord}
              onChange={editUkWord}
            />
          ) : (
            <span>{ukWord}</span>
          )}
        </div>
      </div>
      <button onClick={handleEdit}>{isEditMode ? 'Save' : 'Edit'}</button>
      <button onClick={onDeleteWord}>Delete</button>
    </li>
  );
};
