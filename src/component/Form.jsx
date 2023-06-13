import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import PaymentForm from "./PaymentForm";
export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // close it
    props.close();
  };

  return (
    <div>
      <PaymentForm
        {...props}
        open={payment}
        name={name}
        email={email}
        phone={phone}
        close={() => {
          setPayment(false);
          handleClose();
        }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h4>Booking</h4>
          <div
            style={{
              marginTop: "0.5em",
            }}
          >
            <p>Trip: {props.title}</p>
            <p>
              Price: {props.price.inr} ₹ | {props.price.usd} $
            </p>
          </div>
        </DialogTitle>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              // make lable false

              margin="dense"
              InputLabelProps={{
                style: {
                  fontSize: "0.5em",
                },
              }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              style={{
                fontSize: "2em",
              }}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              InputLabelProps={{
                style: {
                  fontSize: "0.5em",
                },
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              style={{
                fontSize: "2em",
              }}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              InputLabelProps={{
                style: {
                  fontSize: "0.5em",
                },
              }}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="phone"
              label="Phone Number"
              type="number"
              fullWidth
              variant="standard"
              style={{
                fontSize: "2em",
              }}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                fontSize: ".9em",
                textTransform: "capitalize",
                fontFamily: "Lato",
              }}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                fontSize: ".9em",
                textTransform: "capitalize",
                fontFamily: "Lato",
                marginRight: "1em",
              }}
              type="submit"
              endIcon={<PaymentIcon />}
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                setPayment(true);
              }}
            >
              Payment
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
