import type { LoaderArgs } from '@vercel/remix';
import { redirectByUserRole } from '~/lib/redirect-by-user-role.server';
import { authenticator } from '~/services/auth.server';

export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  });
  return redirectByUserRole(user);
}
