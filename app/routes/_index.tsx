import type { V2_MetaFunction } from '@vercel/remix';
import ButtonLink from '~/components/button-link';
import LayoutFooter from '~/components/layout-footer';
import LogoAkeso from '~/components/logo-akeso';
import LogoCdr from '~/components/logo-cdr';
import LogoDiagnostickeCentrum from '~/components/logo-diagnosticke-centrum';
import LogoHorovice from '~/components/logo-horovice';
import LogoMultiscan from '~/components/logo-multiscan';
import { pageMetaTitle } from '~/lib/page-meta-title';

export const meta: V2_MetaFunction = () => [{ title: pageMetaTitle() }];

export default function Index() {
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

          <div className='mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40'>
            <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
              <LogoAkeso className='text-white h-24 w-24 lg:hidden' />

              <h1 className='mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Vítejte na zdravotním portálu Geia od Akeso
              </h1>

              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>

              <div className='mt-10 flex items-center gap-x-6'>
                <ButtonLink size='xl' to='/login' variant='soft'>
                  Přihlásit se
                </ButtonLink>
              </div>
            </div>

            <div className='hidden mx-auto mt-16 lg:flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'>
              <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
                <LogoAkeso className='text-white h-96 w-96' />
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className='mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8'>
            <h2 className='text-center text-lg font-semibold leading-8 text-white'>
              The world’s most innovative companies use our app
            </h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
              <a
                className='col-span-2 lg:col-span-1 text-white hover:text-blue-100 w-full h-full'
                href='https://www.nemocnice-horovice.cz/'
                rel='noreferrer'
                target='_blank'
                title='Nemocnice Hořovice'
              >
                <LogoHorovice className='text-current h-12 w-full object-contain object-center' />
              </a>
              <a
                className='col-span-2 lg:col-span-2 text-white hover:text-blue-100 w-full h-full'
                href='https://www.dcnh.cz/'
                rel='noreferrer'
                target='_blank'
                title='Diagnostické centrum'
              >
                <LogoDiagnostickeCentrum className='text-current h-12 w-full object-contain object-center' />
              </a>
              <a
                className='col-span-2 lg:col-span-2 text-white hover:text-blue-100 w-full h-full'
                href='https://www.cdr-akeso.cz/'
                rel='noreferrer'
                target='_blank'
                title='Centrum duševní rehabilitace'
              >
                <LogoCdr className='text-current h-12 w-full object-contain object-center' />
              </a>
              <a
                className='col-span-2 lg:col-span-1 text-white hover:text-blue-100 w-full h-full'
                href='https://www.multiscan.cz/'
                rel='noreferrer'
                target='_blank'
                title='Multiscan'
              >
                <LogoMultiscan className='text-current h-12 w-full object-contain object-center' />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className='h-16' />
      </main>

      {/* Footer */}
      <LayoutFooter />
    </div>
  );
}
