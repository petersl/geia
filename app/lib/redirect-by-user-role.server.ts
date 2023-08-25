import { redirect } from '@vercel/remix';
import type { AppUser } from '~/models/user.server';

export function redirectByUserRole(user: AppUser) {
  let redirectTo = '/patient';

  if (user.canAccessHospitalSection) {
    redirectTo = '/hospital';
  }

  return redirect(redirectTo);
}
