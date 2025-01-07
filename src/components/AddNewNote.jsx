import {useNotesDispatch} from '../context/NoteContext'
import { useState } from 'react'

function AddNewNote() {
  const dispatch = useNotesDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !description) return null
    const NewNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    }
    dispatch({ type: 'add', payload: NewNote })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="newNote">
      <h2 className="newNoteTitle">Add New Note</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          className="addNoteInput"
          placeholder="note title ... "
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="addNoteInput"
          placeholder="note description ..."
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="newNoteBtn"
          type="submit"
        >
          Add New Note
        </button>
      </form>
    </div>
  )
}

export default AddNewNote
