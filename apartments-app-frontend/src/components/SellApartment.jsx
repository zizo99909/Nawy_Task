import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogActions, Typography, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { getAllApartments, addApartment } from '@/api'; // your api calls
import SellingContent from './SellingContent';

const styles = {
  button: {
    color: '#fff',
    padding: '10px 20px',
    backgroundColor: '#1E4164',
  },
};

const SellApartment = ({ setApartments }) => {
  const [showValidationError, setShowValidationError] = useState(false);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    location: '',
    reference: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    delivery: '',
    compound: '',
    saleType: '',
    finishing: '',
    downPayment: '',
    installmentYears: '',
    installment: '',
    about: '',
  });

  const handleOpen = () => {
    setForm({
      name: '',
      location: '',
      reference: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      delivery: '',
      compound: '',
      saleType: '',
      finishing: '',
      downPayment: '',
      installmentYears: '',
      installment: '',
      about: '',
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    if (showValidationError) setShowValidationError(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const requiredFields = [
      'name',
      'location',
      'size',
      'bedrooms',
      'bathrooms',
      'price',
      'delivery',
      'compound',
      'saleType',
      'finishing',
      'downPayment',
      'installmentYears',
      'installment',
    ];

    const hasEmptyRequiredFields = requiredFields.some(field => !form[field]);

    if (hasEmptyRequiredFields) {
      setShowValidationError(true);
      return;
    }

    try {
      await addApartment(form); // call your POST /apartment/add
      const res = await getAllApartments(); // refresh list
      handleClose(); // closes popup
      setApartments(res.data); // update parent state
      setShowValidationError(false); // reset on success
    } catch (error) {
      console.error('Error adding apartment:', error);
    }
  };

  return (
    <>
      <Button variant="contained" sx={styles.button} onClick={handleOpen}>
        Sell
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle color="#1E4164">Sell Apartment</DialogTitle>
        <SellingContent form={form} setForm={setForm} handleSubmit={handleSubmit} />
        {showValidationError && (
          <Stack direction="row" alignItems="center" ml={3} gap={1} pt={2}>
            <ErrorIcon color="error" />
            <Typography color="error">Please fill in all required fields</Typography>
          </Stack>
        )}
        <DialogActions>
          <Button color="#1E4164" onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ background: '#1E4164' }} onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SellApartment;
