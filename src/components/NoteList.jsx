import { useNotes, useNotesDispatch } from '../context/NoteContext'

function NoteList({ sortBy }) {
  const notes = useNotes()

  let sortedNotes = notes
  if (sortBy === 'earliest')
    sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

  if (sortBy === 'latest')
    sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  if (sortBy === 'completed')
    sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
  return (
    <div className="w-full">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  )
}

export default NoteList

function NoteItem({ note }) {
  const dispatch = useNotesDispatch()

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="noteList">
        <div className="noteListBody">
          <div className="noteListBodyTop">
            <p
              className={`noteListBodyTitle ${
                note.completed ? 'line-through decoration-gray-900 decoration-4 opacity-80' : ''
              }`}
            >
              {note.title}
            </p>
            <div className="noteListCloseCheckbox">
              <button
                onClick={() => dispatch({ type: 'delete', payload: note.id })}
                className="text-xl"
              >
                ❌
              </button>
              <input
                onChange={(e) => {
                  const noteId = Number(e.target.value)
                  dispatch({ type: 'complete', payload: noteId })
                }}
                name={note.id}
                value={note.id}
                checked={note.completed}
                id={note.id}
                type="checkbox"
                className="noteListCheckbox"
              />
            </div>
          </div>
          <p className="noteListBodyDescription">{note.description}</p>
        </div>
      <div className="noteListDate">
        {new Date(note.createdAt).toLocaleDateString('en-US', options)}
      </div>
    </div>
  )
}
