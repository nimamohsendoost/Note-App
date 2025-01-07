import { useNotes } from "../context/NoteContext"

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes()
  return (
    <div className="noteHeader">
      <h1 className="noteHeaderTitle">My Notes ({notes.length})</h1>

      <select
        className="sortNoteInput"
        value={sortBy}
        onChange={onSort}
      >
        <option className="font-semibold" value="latest">Sort based on latest notes</option><hr />
        <option className="font-semibold" value="earliest">Sort based on earliest notes</option><hr />
        <option className="font-semibold" value="completed">Sort based on completed notes</option>
      </select>
    </div>
  )
}

export default NoteHeader
