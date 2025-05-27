import React from 'react';
import { Box, DialogContent, InputAdornment, MenuItem, TextField } from '@mui/material';

const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '8px',
  },
};

const SellingContent = props => {
  const { form, setForm, handleSubmit } = props;

  const saleTypes = ['Developer Sale', 'Resale'];
  const finishingOptions = ['Finished', 'Unfinished'];

  const {
    name,
    location,
    size,
    bedrooms,
    bathrooms,
    price,
    delivery,
    compound,
    saleType,
    finishing,
    downPayment,
    installmentYears,
    installment,
    about,
  } = form;

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <DialogContent>
      <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
        <TextField label="Name" name="name" value={name} onChange={handleChange} required />
        <TextField
          label="Location"
          name="location"
          value={location}
          onChange={handleChange}
          required
        />
        <TextField
          label="Size"
          name="size"
          value={size}
          onChange={handleChange}
          required
          helperText="e.g. 150"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">m²</InputAdornment>,
            },
          }}
        />
        <TextField
          name="bedrooms"
          label="Bedrooms"
          type="number"
          value={bedrooms}
          onChange={handleChange}
          required
          slotProps={{
            htmlInput: {
              min: 0,
            },
          }}
        />
        <TextField
          label="Bathrooms"
          name="bathrooms"
          value={bathrooms}
          onChange={handleChange}
          type="number"
          required
          slotProps={{
            htmlInput: {
              min: 0,
            },
          }}
        />
        <TextField
          label="Price"
          name="price"
          value={price}
          onChange={handleChange}
          required
          helperText="e.g. 132,000"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">EGP</InputAdornment>,
            },
          }}
        />
        <TextField
          label="Delivery Year"
          name="delivery"
          value={delivery}
          onChange={handleChange}
          helperText="e.g. 2030"
          required
        />
        <TextField
          label="Compound"
          name="compound"
          value={compound}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Sale Type"
          name="saleType"
          value={saleType}
          onChange={handleChange}
          required
        >
          {saleTypes.map((type, i) => (
            <MenuItem key={i} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Finishing"
          name="finishing"
          value={finishing}
          onChange={handleChange}
          required
        >
          {finishingOptions.map((opt, i) => (
            <MenuItem key={i} value={opt.toLowerCase()}>
              {opt}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Down Payment"
          name="downPayment"
          value={downPayment}
          onChange={handleChange}
          required
        />
        <TextField
          label="Installment Years"
          name="installmentYears"
          value={installmentYears}
          onChange={handleChange}
          type="number"
          required
        />
        <TextField
          label="Installment"
          name="installment"
          value={installment}
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Monthly</InputAdornment>,
            },
          }}
          required
        />
        <TextField
          label="About"
          name="about"
          value={about}
          onChange={handleChange}
          multiline
          rows={3}
        />
      </Box>
    </DialogContent>
  );
};

export default SellingContent;
