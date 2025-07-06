import { addTagsToNote } from "@/(features)/notes/api/noteHandlers";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const tagIds = body.tagIds;

  return addTagsToNote(Number(params.id), tagIds);
}