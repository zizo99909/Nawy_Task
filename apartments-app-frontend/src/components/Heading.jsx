import { Box, Typography } from '@mui/material';
import React from 'react';

const Heading = props => {
  const { name, location, price } = props;
  return (
    <>
      <Typography color="#1E4164" fontWeight={800} fontSize="16px">
        {name}
      </Typography>
      <Typography color="#646464" fontSize="14px">
        {location}
      </Typography>
      <Typography color="#B6B6B6" fontSize="10px">
        Price
      </Typography>
      <Box fontWeight={800} fontSize="20px">
        {price}
      </Box>
      <hr />
    </>
  );
};

export default Heading;
