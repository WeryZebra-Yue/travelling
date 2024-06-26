import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

function Payment(props) {
  const [price, setPrice] = React.useState(props.price.usd);
  React.useEffect(() => {
    setPrice(props.price.usd);
  }, [props.price.usd]);

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "sb",
      }}
    >
      <div
        style={{
          marginTop: "0.5em",
          height: "2.5em",

          borderRadius: "0.5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        className="paypal"
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: props.price,
                    currency_code: "USD",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions?.order.capture().then(async function (details) {
              const booking = {
                trip: props.title,
                price: props.price,
                payment: "Paypal",
                status: "Booked",
                time: new Date().toLocaleString(),
                name: props.name,
                email: props.email,
                phone: props.phone,
                paymentId: details.id,
              };
              await createBooking(booking);

              window.location.reload();
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}

export default Payment;
