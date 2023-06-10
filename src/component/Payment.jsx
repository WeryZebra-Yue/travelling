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
                    value: props.price.usd,
                    currency_code: "USD",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions?.order.capture().then(function (details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
}

export default Payment;
