import "./App.css";

import { NewNoteInput } from "./components/NewNoteInput";
import { useDispatch, useSelector } from "react-redux";

import { addNote } from "./redux/actions";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Redux Saga app, tested with jest</p>
        <NewNoteInput addNote={onAddNote} />
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
