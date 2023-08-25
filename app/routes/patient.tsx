import { Outlet, useLoaderData } from '@remix-run/react';
import type { LoaderArgs } from '@vercel/remix';
import { json } from '@vercel/remix';
import { useState } from 'react';
import { promiseHash } from 'remix-utils';
import AlertsDrawer from '~/components/alerts-drawer';
import LayoutHeader from '~/components/layout-header';
import { getAlertsCountByUser } from '~/models/alers.server';
import { authenticator } from '~/services/auth.server';

export default function PublicLayout() {
  const data = useLoaderData<typeof loader>();

  const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);

  return (
    <>
      <div className='min-h-full'>
        <LayoutHeader
          alertsCount={data.userAlertsCount}
          navLinks={data.navItems}
          toggleNotificationDrawer={() => {
            setOpenNotificationDrawer((p) => !p);
          }}
        />
        <div className='py-10'>
          <main className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <Outlet />
          </main>
        </div>
      </div>
      <AlertsDrawer
        alertsCount={data.userAlertsCount}
        open={openNotificationDrawer}
        setOpen={setOpenNotificationDrawer}
        userId={data.user.id}
      />
    </>
  );
}

export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request, { failureRedirect: '/' });

  const navItems = [
    { active: true, children: 'Dashboard', to: '/patient' },
    // { active: false, children: 'Team', to: '/patient' },
    // { active: false, children: 'Project', to: '/patient' },
    // { active: false, children: 'Calendar', to: '/patient' },
  ];
  if (user.canAccessHospitalSection) {
    navItems.push({ active: false, children: 'Přejít do nemocniční sekce', to: '/hospital' });
  }

  return json(
    await promiseHash({
      navItems: Promise.resolve(navItems),
      userAlertsCount: getAlertsCountByUser({ userId: user.id }),
      user: Promise.resolve(user),
    }),
  );
}
