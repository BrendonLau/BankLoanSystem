import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Button,
    DialogActions
   } from "@mui/material";
   
   const CustomModal = ({ title, subtitle, children, isOpen, handleClose, handleConfirm, okText, cancelText}) => {

    return (
      <Dialog open={isOpen} onClose={handleClose}>
       <DialogTitle>{title}</DialogTitle>
        <DialogContent>
         <DialogContentText>{subtitle}</DialogContentText>
          <Divider />
           {children}
          </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="error">
             {cancelText}
           </Button>
           <Button onClick={handleConfirm} color="primary">
             {okText}
           </Button>
         </DialogActions>
      </Dialog>
     );
   };
   
   export default CustomModal;