import type { Prisma } from '@prisma/client';
import type { SeederOptions } from './types';

export async function seedUsers(opts: SeederOptions): Promise<void> {
  let seedData: Prisma.UserUpsertArgs[] | null = null;
  switch (opts.environment) {
    case 'development': {
      seedData = [
        {
          create: {
            email: 'peter.slavik7@gmail.com',
          },
          update: {},
          where: {
            email: 'peter.slavik7@gmail.com',
          },
          select: null,
        },
      ];
      break;
    }
  }

  if (seedData == null) {
    console.info('❌ Users seed is empty.');
    return;
  }

  for (const args of seedData) {
    await opts.prisma.user.upsert(args);
    console.info('✅ Users seeded.');
  }
}
