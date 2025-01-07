import { useNotes } from "../context/NoteContext"

function NoteStatus() {
  const notes = useNotes()
  const allNotes = notes.length
  const completedNotes = notes.filter((note) => note.completed).length
  const unCompletedNotes = allNotes - completedNotes

  if(!allNotes) return <h2 className="noteStatusNoNotes">🔷 No notes has already been added ! 🔷</h2>
  
  return (
    <ul className="flex justify-between mb-8">
      <li className="noteStatusTitle">
        All <span className="noteStatusCounter">{allNotes}</span>
      </li>
      <li className="noteStatusTitle">
        Completed <span className="noteStatusCounter">{completedNotes}</span>
      </li>
      <li className="noteStatusTitle">
        Open <span className="noteStatusCounter">{unCompletedNotes}</span>
      </li>
    </ul>
  )
}

export default NoteStatus
