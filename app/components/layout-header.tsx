import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { Fragment } from 'react';
import { classNames } from '~/lib/class-names';

export type LayoutHeaderNavLinksItem = { active: boolean; children: React.ReactNode; to: string };

export default function LayoutHeader(props: {
  alertsCount?: number;
  navLinks: LayoutHeaderNavLinksItem[];
  toggleNotificationDrawer: () => void;
}) {
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    alt='Your Company'
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {props.navLinks.map((navLink, idx) => (
                    <Link
                      key={`layout-nav-item-${idx}`}
                      className={classNames(
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                        navLink.active === true && 'border-blue-500 text-gray-900',
                        navLink.active === false &&
                          'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      )}
                      to={navLink.to}
                    >
                      {navLink.children}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <button
                  className='relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  onClick={() => {
                    props.toggleNotificationDrawer();
                  }}
                  type='button'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  <BellIcon aria-hidden='true' className='h-6 w-6' />
                  {props.alertsCount != null && props.alertsCount > 0 && (
                    <span className='absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white' />
                  )}
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <img
                        alt=''
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            href='/'
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            href='/'
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            to='/logout'
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden='true' className='block h-6 w-6' />
                  ) : (
                    <Bars3Icon aria-hidden='true' className='block h-6 w-6' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {props.navLinks.map((navLink, idx) => (
                <Disclosure.Button
                  key={`layout-nav-item-mobile-${idx}`}
                  as={Link}
                  className={classNames(
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                    navLink.active === true && 'border-blue-500 bg-blue-50 text-blue-700',
                    navLink.active === false &&
                      'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                  )}
                  to={navLink.to}
                >
                  {navLink.children}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-200 pb-3 pt-4'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <img
                    alt=''
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>Tom Cook</div>
                  <div className='text-sm font-medium text-gray-500'>tom@example.com</div>
                </div>
                <button
                  className='relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  type='button'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View notifications</span>
                  <BellIcon aria-hidden='true' className='h-6 w-6' />
                  {props.alertsCount != null && props.alertsCount > 0 && (
                    <span className='absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white' />
                  )}
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <Disclosure.Button
                  as='a'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                  href='#'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                  href='#'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                  href='#'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
