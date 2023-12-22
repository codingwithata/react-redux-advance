import { useSelector, useDispatch } from 'react-redux';
import { removeNote, selectAllNotes } from '../notes.slice';

export default function NotesList() {
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();

  function handleDeleteButtonClick(id) {
    dispatch(removeNote(id));
  }

  const notesListItems = notes.map(({ id, note }) => (
    <li key={id}>
      <span>{note}</span>
      <button onClick={() => handleDeleteButtonClick(id)}>Delete</button>
    </li>
  ));

  return notesListItems.length > 0 ? (
    <ul>{notesListItems}</ul>
  ) : (
    <h3>Please add some notes</h3>
  );
}
