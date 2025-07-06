import prisma from "@/lib/prisma";

export async function getAllNotes() {
  const notes = await prisma.note.findMany({
    include: { tags: true },
  });
  return Response.json(notes);
}

export async function createNote(req: Request) {
  const { content } = await req.json();
  const newNote = await prisma.note.create({
    data: { content },
  });
  return Response.json(newNote);
}

export async function addTagsToNote(noteId: number, tagIds: number[]) {
  const updatedNote = await prisma.note.update({
    where: { id: noteId },
    data: {
      tags: {
        connect: tagIds.map((id) => ({ id })),
      },
    },
    include: { tags: true },
  });

  return Response.json(updatedNote);
}
