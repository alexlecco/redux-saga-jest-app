import "./App.css";

import { NewNoteInput } from "./components/NewNoteInput";
import { useDispatch, useSelector } from "react-redux";

import { addNote, saveNotes, loadNotes } from "./redux/actions";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes(notes));
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Redux Saga app, tested with jest</p>

        <NewNoteInput addNote={onAddNote} />
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}

        <br />
        <button onClick={onSave}>Save notes</button>
        <br />
        <button onClick={onLoad}>Load notes</button>
      </header>
    </div>
  );
}

export default App;
