import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import Payment from "./Payment";
import { createBooking } from "../service/user.service";
export default function PaymentForm(props) {
  const [open, setOpen] = useState(false);
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h4>Payment </h4>
          <div
            style={{
              marginTop: "0.5em",
            }}
          >
            <p>Trip: {props.title}</p>
            <p>
              Price: {props.price} {props.currency}
            </p>
          </div>
          <h5
            style={{
              marginTop: "0.5em",
              fontSize: "1.1em",
              textTransform: "capitalize",
              fontFamily: "Lato",
            }}
          >
            Choose your payment method
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {props.currency !== "₹" ? (
              <Payment {...props} />
            ) : (
              <Button
                style={{
                  marginTop: "0.5em",
                  fontSize: "1.1em",
                  textTransform: "capitalize",
                  fontFamily: "Lato",
                  width: "100%",
                  padding: "0.5em",
                }}
                variant="outlined"
                onClick={() => {
                  const options = {
                    key: "rzp_test_2mAYnRncGDEawP",
                    amount: props.price * 100,
                    name: "Acme Corp",
                    description: "Test Transaction",
                    image: "https://example.com/your_logo",
                    handler: async function (response) {
                      const booking = {
                        trip: props.title,
                        price: props.price,
                        payment: "Razorpay",
                        status: "Booked",
                        time: new Date().toLocaleString(),
                        name: props.name,
                        email: props.email,
                        phone: props.phone,
                        paymentId: response.razorpay_payment_id,
                      };
                      await createBooking(booking);
                      window.location.reload();
                    },

                    prefill: {
                      name: props.name,
                      email: props.email,
                      contact: props.phone,
                    },

                    notes: {
                      address: "Razorpay Corporate Office",
                    },
                    theme: {
                      color: "rgb(25, 118, 210)",
                    },
                  };
                  const rzp = new window.Razorpay(options);
                  rzp.open();
                  rzp.on("payment.approved", function (response) {
                    console.log(response);
                    props.close();
                  });
                }}
              >
                <img
                  src="https://pages.awscloud.com/rs/112-TZM-766/images/1_RAZORPAY_LOGO.png"
                  width={80}
                />
              </Button>
            )}
          </div>
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
}
