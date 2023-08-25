import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/seed-users';
import type { SeederOptions } from './seeds/types';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  // Get environment from script cmd line arguments.
  // TODO: Setup getting db seed environment value from script arguments.
  const environment = 'development';

  const opts: SeederOptions = {
    environment,
    prisma,
  };

  // Run seeders
  await seedUsers(opts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
