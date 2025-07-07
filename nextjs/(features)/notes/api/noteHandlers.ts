import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

export async function getAllNotes() {
  try {
    const notes = await prisma.note.findMany({
      include: { tags: true },
    })
    return notes
  } catch (error) {
    console.error('Database error in getAllNotes:', error)
    throw new Error('Failed to fetch notes from database')
  }
}

export async function createNote(req: NextRequest) {
  try {
    const { content } = await req.json()

    if (!content || typeof content !== 'string') {
      throw new Error('Content is required and must be a string')
    }

    const newNote = await prisma.note.create({
      data: { content },
      include: { tags: true },
    })
    return newNote
  } catch (error) {
    console.error('Database error in createNote:', error)
    throw new Error('Failed to create note in database')
  }
}

export async function addTagsToNote(noteId: number, tagIds: number[]) {
  try {
    // Validate that the note exists
    const existingNote = await prisma.note.findUnique({
      where: { id: noteId },
    })

    if (!existingNote) {
      throw new Error(`Note with id ${noteId} not found`)
    }

    const updatedNote = await prisma.note.update({
      where: { id: noteId },
      data: {
        tags: {
          connect: tagIds.map((id) => ({ id })),
        },
      },
      include: { tags: true },
    })

    return updatedNote
  } catch (error) {
    console.error('Database error in addTagsToNote:', error)
    throw new Error('Failed to add tags to note in database')
  }
}
