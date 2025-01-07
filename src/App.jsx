import './App.css'

import AddNewNote from './components/AddNewNote'
import NoteHeader from './components/NoteHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'
import { NotesProvider } from './context/NoteContext'
import { useState } from 'react'

function App() {
  const [sortBy, setSortBy] = useState('latest')

  return (
    <NotesProvider>
      <div className="bg-stone-100 min-h-screen">
        <div className=" text-center mx-auto py-10 px-10 grid grid-cols-1">
          <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
          <div className="grid grid-cols-12">
            <AddNewNote />
            <div className=" p-10 space-y-6 lg:col-span-7 sm:col-span-full">
              <NoteStatus />
              <NoteList
                sortBy={sortBy}
              />
            </div>
          </div>
        </div>
      </div>
    </NotesProvider>
  )
}

export default App
