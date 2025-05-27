import { getApartmentDetails } from '@/api';
import ApartmentDetails from '@/components/ApartmentDetails';

export default function Home({ apartment }) {
  return <ApartmentDetails apartment={apartment} />;
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const res = await getApartmentDetails(id);
    const apartment = res.data;

    return {
      props: { apartment },
    };
  } catch (error) {
    return {
      props: { apartment: [], error: error.message },
    };
  }
}
