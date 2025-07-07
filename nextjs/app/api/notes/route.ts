import { NextRequest, NextResponse } from 'next/server'
import { getAllNotes, createNote } from '@/(features)/notes/api/noteHandlers'

export async function GET() {
  try {
    const notes = await getAllNotes()
    return NextResponse.json(notes)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    )
  }
  /*
curl http://localhost:3000/api/notes
 */
}

export async function POST(req: NextRequest) {
  try {
    const note = await createNote(req)
    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    )
  }
  /**
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"content": "My first note"}'
 */
}
