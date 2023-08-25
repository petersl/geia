import { CalendarIcon, CheckIcon, UserIcon } from '@heroicons/react/20/solid';
import { useLoaderData } from '@remix-run/react';
import { json, type LoaderArgs, type V2_MetaFunction } from '@vercel/remix';
import PageHeader from '~/components/page-header';
import { classNames } from '~/lib/class-names';
import { pageMetaTitle } from '~/lib/page-meta-title';
import { authenticator } from '~/services/auth.server';

export const meta: V2_MetaFunction = () => [{ title: pageMetaTitle('') }];

const timeline = [
  {
    id: 1,
    content: 'Operace kolorektální karcinom',
    target: 'Administrativa',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Vstupní návštěva',
    target: 'MuDr. Marek Janka',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: CalendarIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Potvrzení diagnózy',
    target: 'MuDr. Marek Janka',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Ambulatní zpráva',
    target: 'MuDr. Marek Janka',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 5,
    content: 'Předběžný termín operace',
    target: 'MuDr. Marek Janka',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },

  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
];

export default function PatientDashboardPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <PageHeader title={<>Vítejte {data.user.email}</>} />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div>
          <div className='border-b border-gray-200 pb-5 mb-8'>
            <h2 className='text-base font-semibold leading-6 text-gray-900'>Notifikace</h2>
          </div>

          <ul className='divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl'>
            <li className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'>AAA</li>
            <li className='relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6'>BBB</li>
          </ul>
        </div>
        <div>
          <div className='border-b border-gray-200 pb-5 mb-8'>
            <h2 className='text-base font-semibold leading-6 text-gray-900'>Plánované operace</h2>
          </div>
          <PlannedOperationCard />
        </div>
      </div>
    </>
  );
}

export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request, { failureRedirect: '/' });
  return json({ user });
}

function PlannedOperationCard() {
  return (
    <div className='rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
      <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6 rounded-t-lg'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>Operace kolorektální karcinom</h3>
      </div>
      <div className='bg-white px-4 py-5 sm:px-6 last:rounded-b-lg'>
        <div className='flow-root'>
          <ul className='-mb-8'>
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className='relative pb-8'>
                  {eventIdx !== timeline.length - 1 ? (
                    <span aria-hidden='true' className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200' />
                  ) : null}
                  <div className='relative flex space-x-3'>
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                        )}
                      >
                        <event.icon aria-hidden='true' className='h-5 w-5 text-white' />
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          {event.content}{' '}
                          <a className='font-medium text-gray-900' href={event.href}>
                            {event.target}
                          </a>
                        </p>
                      </div>
                      <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
