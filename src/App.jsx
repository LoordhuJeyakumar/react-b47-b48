import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function App() {
  // define states
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] =  useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  const newNoteContentRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes/');
      setNotes(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  }

  useEffect(()=>{
    newNoteContentRef.current.focus()
  }, []);

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleStatusChange = (event)=>{
    setShowStatus(event.target.value)
  }

  let filterNotes = (notes, showStatus)=>{
    switch (showStatus){
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note=>note.important === true);
      case 'nonimp':
          return notes.filter(note=>note.important === false);
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);

  const addNote = (event)=>{
    event.preventDefault();

    

    let noteObject = {
      content : newNoteContent,
      important : newNoteImportant
    };


    console.log('adding new note...');
    axios
      .post('http://localhost:3000/notes/', noteObject)
      .then(response => {
        console.log('note added successfully...');
      })

      // clear the inputs
      setNewNoteContent('');
      setNewNoteImportant('');
      newNoteContentRef.current.focus();

      fetchNotes();

  }


  return (

    <div>
      <h1>Notes</h1>
      <label>
        <input 
        type="radio"
        name='notesFilter'
        onChange={handleStatusChange}
        value='all'
        checked={showStatus === 'all'}
        />
        All Notes
      </label>
      <label>
        <input 
        type="radio"
        name='notesFilter'
        onChange={handleStatusChange}
        value='imp'
        checked={showStatus === 'imp'}
        />
        Important Notes
      </label>
      <label>
        <input 
        type="radio"
        name='notesFilter'
        onChange={handleStatusChange}
        value='nonimp'
        checked={showStatus === 'nonimp'}
        />
        Non Important Notes
      </label>

      <ul>
        {
          notesFiltered.map(note=>
            <li key={note.id}>{note.content}</li>
            )
        }
      </ul>
        <hr />
        <h2>Add New Note</h2>
        <form onSubmit={addNote}>
          <label>
            Content: &nbsp; &nbsp;
            <input 
            type="text"
            onChange={(e)=>setNewNoteContent(e.target.value)}
            value={newNoteContent}
            ref={newNoteContentRef}
            required
            />
          </label>
          <br />
          <br />
          <label>
            Is Important ? &nbsp; &nbsp;
            <select 
            onChange={(e)=>setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
            required
            >
              <option >---select---</option>
              <option> True </option>
              <option> False </option>
            </select>
          </label>
          <button type="submit">Add New Note</button>
        </form>
      
    </div>
  )
}

export default App