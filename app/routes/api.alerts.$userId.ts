import type { LoaderArgs } from '@vercel/remix';
import { json } from '@vercel/remix';
import { getAlertsByUser } from '~/models/alers.server';

export async function loader({ params }: LoaderArgs) {
  const { userId } = params;

  return json({
    alerts: userId == null ? [] : await getAlertsByUser({ userId }),
  });
}
