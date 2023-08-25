import { PlusIcon } from '@heroicons/react/20/solid';
import ButtonLink from '~/components/button-link';
import PageHeader from '~/components/page-header';

export default function HospitalSurgeriesPage() {
  return (
    <>
      <PageHeader
        actions={
          <>
            <ButtonLink className='inline-flex items-center' to='/hospital/surgeries/new' variant='primary'>
              <PlusIcon aria-hidden='true' className='-ml-0.5 h-5 w-5' />
              Nová
            </ButtonLink>
          </>
        }
        title={'Přehled plánovaných operací'}
      />
    </>
  );
}
