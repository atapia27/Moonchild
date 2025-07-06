import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: { email: body.email, name: body.name },
  });
  return Response.json(user);
}
