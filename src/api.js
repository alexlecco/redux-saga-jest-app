import { firebaseApp } from "./firebase";

const Notes = firebaseApp.database().ref().child("notes");

export const getNotes = () => {
  let notes = [];
  Notes.on("value", (snap) => {
    snap.forEach((child) => {
      notes.push(child.val());
    });
  });
  console.log("notes:::", notes);
  return notes;
};

export const postNotes = (notes) => {
  Notes.set(notes);
};
