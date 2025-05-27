import Image from 'next/image';
import { Box } from '@mui/material';
import React from 'react';
import Heading from './Heading';
import Specs from './Specs';
import PaymentPlans from './PaymentPlans';
import About from './About';

const styles = {
  imageBox: {
    width: '100%',
    height: '300px',
    position: 'relative',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    overflow: 'hidden',
  },
  imageStyle: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
};

const ApartmentDetails = props => {
  const { apartment } = props;
  const {
    reference,
    name,
    compound,
    imageUrl,
    location,
    size,
    bedrooms,
    bathrooms,
    price,
    delivery,
    saleType,
    finishing,
    downPayment,
    installmentYears,
    installment,
    about,
  } = apartment || {};

  const placeholder = '/images/placeholder.jpg';

  return (
    <Box mt="50px" position="relative">
      <Box sx={styles.imageBox}>
        <Image src={imageUrl || placeholder} alt={name} priority fill style={styles.imageStyle} />
      </Box>
      <Heading name={name} location={location} price={price} />
      <Specs
        compound={compound}
        reference={reference}
        imageUrl={imageUrl}
        size={size}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        delivery={delivery}
        saleType={saleType}
        finishing={finishing}
      />
      <PaymentPlans
        downPayment={downPayment}
        installmentYears={installmentYears}
        installment={installment}
      />
      <About about={about} />
    </Box>
  );
};

export default ApartmentDetails;
