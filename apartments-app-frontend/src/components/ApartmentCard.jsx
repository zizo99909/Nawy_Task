import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MeterIcon from '../../assets/MeterIcon';
import BedroomIcon from '../../assets/BedroomIcon';
import BathroomIcon from '../../assets/BathroomIcon';

const styles = {
  container: {
    border: '1px solid #E5E5E5',
    borderRadius: '10px',
    mb: '20px',
    '&:hover': {
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      border: '1px solid rgb(51, 123, 196)',
    },
    textDecoration: 'none',
    color: 'inherit',
  },
  imageBox: {
    width: '100%',
    height: '200px',
    position: 'relative',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    overflow: 'hidden',
  },
};

const ApartmentCard = props => {
  const { apartment } = props;
  const { id, name, imageUrl, location, size, bedrooms, bathrooms, price, delivery } =
    apartment || {};

  const placeholder = '/images/placeholder.jpg';

  return (
    <Box component={Link} href={`/apartment/${id}`} sx={styles.container}>
      <Box sx={styles.imageBox}>
        <Image
          src={imageUrl || placeholder}
          alt={name}
          priority
          fill
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <Box position="absolute" textAlign="right" color="white" bottom={10} right={10}>
          <Typography fontSize="16px" lineHeight={0.7} m={0} p={0}>
            Delivery in
          </Typography>
          <Typography fontSize="18px" fontWeight={700}>
            {delivery}
          </Typography>
        </Box>
      </Box>
      <Box p="15px">
        <Typography color="#212427">{name}</Typography>
        <Typography color="#656565">{location}</Typography>
        <Stack direction="row" alignItems="center" gap={7} mt={1}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Stack direction="row" alignItems="center">
              <Typography>
                <sup>{bedrooms}</sup>
              </Typography>
              <BedroomIcon />
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography>
                <sup>{bathrooms}</sup>
              </Typography>
              <BathroomIcon />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" gap="5px">
            <MeterIcon />
            <Typography>{size}</Typography>
          </Stack>
        </Stack>

        <Typography mt="40px" fontSize="18px" fontWeight="800">
          {price}
        </Typography>
      </Box>
    </Box>
  );
};
export default ApartmentCard;
