import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { removeNote } from '../notes.slice';

export default function CreateNote() {
  const dispatch = useDispatch();

  const [note, setNote] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(removeNote(note));
  }

  function handleChange({ target: { value } }) {
    setNote(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="note">Create a note: </label>
      <input
        id="note"
        name="note"
        onChange={handleChange}
        placeholder="e.g., my new note"
        type="text"
        value={note}
      />
      <input type="submit" />
    </form>
  );
}
