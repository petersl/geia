import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Link } from '@remix-run/react';

export default function PageHeader(props: {
  actions?: React.ReactNode;
  breadcrumbs?: { backTo?: string; items: { title: React.ReactNode; to: string }[] };
  title: React.ReactNode;
}) {
  return (
    <header className={'mb-8'}>
      {props.breadcrumbs && <PageHeaderBreadcrumbs {...props.breadcrumbs} />}

      <div className='mt-2 md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            {props.title}
          </h2>
        </div>
        {props.actions && <div className='mt-4 flex flex-shrink-0 md:ml-4 md:mt-0'>{props.actions}</div>}
      </div>
    </header>
  );
}

export function PageHeaderBreadcrumbs(props: { backTo?: string; items: { title: React.ReactNode; to: string }[] }) {
  return (
    <div>
      {props.backTo && (
        <nav aria-label='Back' className='sm:hidden'>
          <Link className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700' to='#'>
            <ChevronLeftIcon aria-hidden='true' className='-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400' />
            Zpět
          </Link>
        </nav>
      )}
      <nav aria-label='Breadcrumb' className='hidden sm:flex'>
        <ol className='flex items-center space-x-4'>
          {props.items.map((item, idx) => (
            <li key={`page-header-breadcrumb-${idx}`}>
              <div className='flex'>
                <Link className='text-sm font-medium text-gray-500 hover:text-gray-700' to={item.to}>
                  {item.title}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
