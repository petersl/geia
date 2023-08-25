import { Form, useNavigate } from '@remix-run/react';
import type { ActionArgs } from '@vercel/remix';
import LayoutFooter from '~/components/layout-footer';
import LogoAkeso from '~/components/logo-akeso';
import { authenticator } from '~/services/auth.server';

export default function LogoutPage() {
  const navigate = useNavigate();

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
              <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white'>Odhlášení</h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
              <div className='bg-white px-6 py-12 shadow shadow-blue-700 sm:rounded-lg sm:px-12'>
                <div className='space-y-6'>
                  <p className='block text-sm font-medium leading-6 text-gray-900'>Skutečně se chcete odhlásit?</p>
                  <Form className='flex items-center justify-center' method='post'>
                    <button
                      className='flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                      type='submit'
                    >
                      Ano chci se odhlasit
                    </button>
                  </Form>
                  <div>
                    <button
                      className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      onClick={() => {
                        navigate(-1);
                      }}
                      type='button'
                    >
                      Ne chci pokračovat
                    </button>
                  </div>
                </div>
              </div>
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
  await authenticator.logout(request, { redirectTo: '/' });
}
