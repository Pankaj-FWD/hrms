import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Active Employee
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent sx={{ width: 2000, height: 800 }}>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="on"
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                label="Code"
                defaultValue=""
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                label="Type Employee Name"
                defaultValue=""
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                label="First Name"
                defaultValue=""
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                label="Middle Name"
                defaultValue=""
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                label="Last Name"
                defaultValue=""
              />
            </div>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
