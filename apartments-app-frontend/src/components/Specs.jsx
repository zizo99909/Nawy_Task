import { Box } from '@mui/material';
import React from 'react';
import Spec from './Spec';

const styles = {
  specs: {
    '&> :nth-of-type(even)': {
      background: '#F4F4F4',
    },
  },
};

const Specs = props => {
  const { reference, saleType, compound, size, bedrooms, bathrooms, finishing, delivery } = props;
  return (
    <Box my="50px">
      <Box sx={styles.specs}>
        <Spec
          sx={{ color: '#1E4164', fontSize: '20px', fontWeight: 700 }}
          label="Apartment"
          value={size}
        />
        <hr style={{ margin: '0' }} />
        <Spec label="Reference" value={reference} />
        <Spec label="Bedrooms" value={bedrooms} />
        <Spec label="Bedrooms" value={bathrooms} />
        <Spec label="Delivery In" value={delivery} />
        <Spec label="Compound" value={compound} />
        <Spec label="Size" value={size} />
        <Spec label="Sale Type" value={saleType} />
        <Spec label="Finishing" value={finishing} />
      </Box>
    </Box>
  );
};

export default Specs;
