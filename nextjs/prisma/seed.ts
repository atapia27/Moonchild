import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tag = await prisma.tag.create({
    data: { name: 'General' },
  });

  await prisma.note.create({
    data: {
      content: 'Welcome to your new Prisma schema!',
      tags: { connect: [{ id: tag.id }] },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
