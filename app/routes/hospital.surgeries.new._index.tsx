import PageHeader from '~/components/page-header';

export default function HospitalSurgeriesNewPage() {
  return (
    <>
      <PageHeader title={'Nová operace'} />
      <ul>
        <li>Vyhledat pacienta</li>
        <li>Vybrat sablonu operace</li>
      </ul>

      <ul>
        <li>
          <h1>Operace kolorektální karcinóm</h1>
          <ul>
            <li>
              <h2>Vstupní návštěva</h2>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
