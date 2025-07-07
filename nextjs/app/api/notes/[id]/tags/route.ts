import { NextRequest, NextResponse } from 'next/server'
import { addTagsToNote } from '@/(features)/notes/api/noteHandlers'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json()
    const tagIds = body.tagIds

    if (!tagIds || !Array.isArray(tagIds)) {
      return NextResponse.json(
        { error: 'tagIds must be an array' },
        { status: 400 }
      )
    }

    const updatedNote = await addTagsToNote(Number(params.id), tagIds)
    return NextResponse.json(updatedNote)
  } catch (error) {
    console.error('Error adding tags to note:', error)
    return NextResponse.json(
      { error: 'Failed to add tags to note' },
      { status: 500 }
    )
  }
}

/*
curl -X PATCH http://localhost:3000/api/notes/1/tags \
  -H "Content-Type: application/json" \
  -d '{"tagIds": [1, 2]}'
 */
