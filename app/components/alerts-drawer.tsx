import { useFetcher } from '@remix-run/react';
import { useEffect } from 'react';
import type { loader as apiAlertsLoader } from '../routes/api.alerts.$userId';
import DrawerOnRight from './drawer-on-right';

export default function AlertsDrawer(props: {
  alertsCount: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  userId: string;
}) {
  return (
    <DrawerOnRight open={props.open} setOpen={props.setOpen} title={'Zprávy'}>
      {props.open && <AlertsDrawerUserNotifications alertsCount={props.alertsCount} userId={props.userId} />}
    </DrawerOnRight>
  );
}

function AlertsDrawerUserNotifications(props: { alertsCount: number; userId: string }) {
  const alertsFetcher = useFetcher<typeof apiAlertsLoader>();
  useEffect(() => {
    if (alertsFetcher.state === 'idle' && alertsFetcher.data == null) {
      alertsFetcher.load(`/api/alerts/${props.userId}`);
    }
  }, [alertsFetcher, props.userId]);

  return (
    <ul className='divide-y divide-gray-100'>
      {alertsFetcher.state === 'loading' &&
        Array.from({ length: props.alertsCount }).map((_, idx) => (
          <li key={`alerts-drawer-item-skeleton-${idx}`} className='bg-slate-200 animate-pulse h-14' />
        ))}
      {alertsFetcher.state === 'idle' &&
        alertsFetcher.data != null &&
        alertsFetcher.data.alerts.map((alert) => (
          <li key={`alerts-drawer-item-${alert.id}`} className='py-4'>
            <h3 className='flex-auto truncate text-sm font-semibold leading-6 text-gray-900'>{alert.message}</h3>
          </li>
        ))}
    </ul>
  );
}
