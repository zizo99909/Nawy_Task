import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ApartmentCard from './ApartmentCard';
import SellApartment from './SellApartment';

const styles = {
  title: {
    color: '#1E4164',
    fontWeight: '700',
    fontSize: '24px',
  },
  apartmentsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
};

const HomePage = props => {
  const { apartments, setApartments } = props;

  if (!apartments || !apartments.length) return <Box>Sorry, No Apartments Available</Box>;

  return (
    <Box mt="70px">
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
        <Box>
          <Typography sx={styles.title}>Explore our Properties</Typography>
          <Typography color="#656565">{apartments.length} Results Available</Typography>
        </Box>
        <SellApartment setApartments={setApartments} />
      </Stack>
      <Box sx={styles.apartmentsContainer}>
        {apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
