import { Box, Typography } from '@mui/material';
import React from 'react';

const About = props => {
  const { about } = props;

  if (!about) return null;

  return (
    <Box my="50px">
      <Typography color="#1E4164" fontSize="16px" fontWeight={800}>
        About
      </Typography>
      <Typography>{about}</Typography>
    </Box>
  );
};

export default About;
