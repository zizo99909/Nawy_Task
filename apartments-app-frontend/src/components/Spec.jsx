import { Box } from '@mui/material';

const Spec = ({ label, value, sx }) => {
  return (
    <Box display="flex" p="8px" gap={2}>
      <Box
        display="flex"
        gap={1}
        sx={{
          width: '50%',
          fontSize: { xs: '14px', sm: '16px' },
          fontWeight: '500',
          ...sx,
        }}
      >
        {label}
      </Box>
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          wordBreak: 'break-word',
          width: '50%',
          fontSize: { xs: '14px', sm: '16px' },
          ...sx,
        }}
      >
        {value}
      </Box>
    </Box>
  );
};
export default Spec;
