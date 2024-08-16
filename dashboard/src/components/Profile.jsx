import React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

export default function Profile({ open, onClose }) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
    >
      <div style={{backgroundColor:"lightblue",height:"100vh"}} ><CloseIcon onClick={(event) => {
        event.stopPropagation();
        onClose();
      }} /></div>
    </Dialog>
  )
}