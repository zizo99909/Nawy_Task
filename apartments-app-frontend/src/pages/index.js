import { getAllApartments } from '@/api';
import HomePage from '@/components/HomePage';
import { useState } from 'react';

export default function Home({ allApartments }) {
  const [apartments, setApartments] = useState(allApartments);

  return <HomePage apartments={apartments} setApartments={setApartments} />;
}

export async function getServerSideProps() {
  try {
    const res = await getAllApartments();
    const allApartments = res.data;

    return {
      props: { allApartments },
    };
  } catch (error) {
    return {
      props: { allApartments: [], error: error.message },
    };
  }
}
