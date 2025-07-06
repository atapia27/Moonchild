import { getAllNotes, createNote } from "@/(features)/notes/api/noteHandlers";

export async function GET() {
  return getAllNotes();
/*
curl http://localhost:3000/api/notes
 */
}


export async function POST(req: Request) {
  return createNote(req);
/**
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"content": "My first note"}'
 */
}
