import type { PrismaClient } from '@prisma/client';

export type SeederOptions = {
  environment: SeederEnvironment;
  prisma: PrismaClient;
};

export type SeederEnvironment = 'development';
