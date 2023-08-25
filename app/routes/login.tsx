import { XMarkIcon } from '@heroicons/react/20/solid';
import { Form, useSearchParams } from '@remix-run/react';
import { type ActionArgs, type LoaderArgs } from '@vercel/remix';
import { useEffect, useState } from 'react';
import LayoutFooter from '~/components/layout-footer';
import LogoAkeso from '~/components/logo-akeso';
import { redirectByUserRole } from '~/lib/redirect-by-user-role.server';
import { authenticator } from '~/services/auth.server';

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const searchParamsHasFailed = searchParams.has('failed');
  const [loginFailed, setLoginFailed] = useState(searchParamsHasFailed);
  useEffect(() => {
    setLoginFailed(searchParamsHasFailed);
  }, [searchParamsHasFailed]);
  function dismissLoginFailed() {
    setLoginFailed(false);
  }

  return (
    <div className='bg-blue-900 min-h-full flex flex-col'>
      <main className='flex-1'>
        <div className='relative isolate overflow-hidden'>
          <svg
            aria-hidden='true'
            className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          >
            <defs>
              <pattern
                height={200}
                id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
                patternUnits='userSpaceOnUse'
                width={200}
                x='50%'
                y={-1}
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg className='overflow-visible fill-gray-800/20' x='50%' y={-1}>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)' height='100%' strokeWidth={0} width='100%' />
          </svg>

          <div
            aria-hidden='true'
            className='absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]'
          >
            <div
              className='aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
              <LogoAkeso className='mx-auto h-10 w-auto text-white' />
              <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
                Přihlášení k vašemu účtu
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
              <div className='bg-white px-6 py-12 shadow shadow-blue-700 sm:rounded-lg sm:px-12'>
                {loginFailed && (
                  <div className='bg-red-50 rounded-md p-4 mb-6' role='alert'>
                    <div className='flex'>
                      <div>
                        <h3 className=' text-sm font-medium text-red-800'>Přihlášení se nezdařilo.</h3>
                        <p className='mt-2 text-sm text-red-700'>Uživatel neexistuje, nebo je neplatné heslo.</p>
                      </div>
                      <div className='ml-auto pl-3'>
                        <div className='-mx-1.5 -my-1.5'>
                          <button
                            className='inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50'
                            onClick={() => {
                              dismissLoginFailed();
                            }}
                            type='button'
                          >
                            <span className='sr-only'>Dismiss</span>
                            <XMarkIcon aria-hidden='true' className='h-5 w-5' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Form className='space-y-6' method='post'>
                  <div>
                    <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='email'>
                      Email adresa
                    </label>
                    <div className='mt-2'>
                      <input
                        autoComplete='email'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        id='email'
                        name='email'
                        required
                        type='email'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='password'>
                      Heslo
                    </label>
                    <div className='mt-2'>
                      <input
                        autoComplete='current-password'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
                        id='password'
                        name='password'
                        required
                        type='password'
                      />
                    </div>
                  </div>

                  {/*
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600'
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                />
                <label className='ml-3 block text-sm leading-6 text-gray-900' htmlFor='remember-me'>
                  Remember me
                </label>
              </div>

              <div className='text-sm leading-6'>
                <a className='font-semibold text-blue-600 hover:text-blue-500' href='#'>
                  Forgot password?
                </a>
              </div>
            </div>*/}

                  <div>
                    <button
                      className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      type='submit'
                    >
                      Přihlásit se
                    </button>
                  </div>
                </Form>

                {/* <div>
            <div className='relative mt-10'>
              <div aria-hidden='true' className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200' />
              </div>
              <div className='relative flex justify-center text-sm font-medium leading-6'>
                <span className='bg-white px-6 text-gray-900'>Nebo</span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-2 gap-4'>
              <a
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]'
                href='#'
              >
                <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                </svg>
                <span className='text-sm font-semibold leading-6'>Twitter</span>
              </a>

              <a
                className='flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]'
                href='#'
              >
                <svg aria-hidden='true' className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    clipRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    fillRule='evenodd'
                  />
                </svg>
                <span className='text-sm font-semibold leading-6'>GitHub</span>
              </a>
            </div>
          </div> */}
              </div>

              {/* <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?{' '}
          <a className='font-semibold leading-6 text-blue-600 hover:text-blue-500' href='#'>
            Start a 14 day free trial
          </a>
        </p> */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <LayoutFooter />
    </div>
  );
}

export async function action({ request }: ActionArgs) {
  return authenticator.authenticate('credentials', request, {
    successRedirect: '/login/redirect-by-role',
    failureRedirect: '/login?failed=true',
  });
}

export async function loader({ request }: LoaderArgs) {
  const user = await authenticator.isAuthenticated(request);
  if (user != null) {
    return redirectByUserRole(user);
  }
  return null;
}
