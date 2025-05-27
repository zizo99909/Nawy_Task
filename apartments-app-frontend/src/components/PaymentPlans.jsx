import { Stack, Typography } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';

const PaymentPlans = props => {
  const { downPayment, installmentYears, installment } = props;
  return (
    <>
      <Typography color="#1E4164" fontSize="16px" fontWeight={800}>
        Payment Plans
      </Typography>
      <Stack direction="row" bgcolor="#F7F9FD" alignItems="center" p="10px" borderRadius="10px">
        <Stack direction="row" gap={1} alignItems="center">
          <Stack direction="column" justifyContent="center">
            <Typography fontSize="10px" color="#3E4042">
              Installment
            </Typography>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography fontSize="15px" fontWeight={600}>
                {installment}/Month
              </Typography>
              <Typography fontSize="12px" color="#3E4042">
                {installmentYears} years
              </Typography>
            </Stack>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <Stack>
            <Typography fontSize="10px" color="#3E4042">
              Down Payment
            </Typography>
            <Typography fontSize="15px" fontWeight={600}>
              {downPayment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PaymentPlans;
