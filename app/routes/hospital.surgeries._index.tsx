import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Fragment, useRef, useState } from 'react';
import Button from '~/components/button';
import ButtonLink from '~/components/button-link';
import PageHeader from '~/components/page-header';

export default function HospitalSurgeriesPage() {
  const [openNew, setOpenNew] = useState(false);

  return (
    <>
      <PageHeader
        actions={
          <>
            <Button className='inline-flex items-center' onClick={() => setOpenNew(true)} variant='primary'>
              <PlusIcon aria-hidden='true' className='-ml-0.5 h-5 w-5' />
              Nová
            </Button>
          </>
        }
        title={'Přehled plánovaných operací'}
      />
      <SurgeryNewSelectTemplateDialog open={openNew} setOpen={setOpenNew} />
    </>
  );
}

function SurgeryNewSelectTemplateDialog({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root as={Fragment} show={open}>
      <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <ExclamationTriangleIcon aria-hidden='true' className='h-6 w-6 text-red-600' />
                  </div>
                  <div className='mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <Dialog.Title as='h3' className='text-base font-semibold leading-6 text-gray-900'>
                      Vyberte typ operace
                    </Dialog.Title>
                    <ul className='mt-2'>
                      <li className='flex items-center justify-between gap-x-6 py-5'>
                        <div className='w-full'>
                          <div className='min-w-0'>
                            <p className='text-sm font-semibold leading-6 text-gray-900'>Kolorektal</p>
                          </div>
                          <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
                            <p>No popis operace k vytvoreni...</p>
                          </div>
                        </div>
                        <div className='flex flex-none items-center gap-x-4'>
                          <ButtonLink to='/hospital/surgeries/new' variant='primary'>
                            Vytvořit
                          </ButtonLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <Button ref={cancelButtonRef} className='mt-3 sm:mt-0' onClick={() => setOpen(false)} type='button'>
                    Storno
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
