import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "react-toastify";
import axios from "axios";
import { khaltiProps } from "./khaltiprops";

export default function Khalti({ amount, data }) {
  const config = {
    publicKey: process.env.REACT_APP_kHALTI_KEY,
    productIdentity: "1234567890",
    productName: "Burger",
    productUrl:
      "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        const sendRequest = async () => {
          try {
            const response = await axios.post(
              "https://glbfileconverter.onrender.com/api/v1/special/order",
              {
                data: data,
                amount: amount,
              }
            );
            if (response.status === 200) {
              toast.success("Payment Succeed!");
            } else {
              toast.error("Payment Failed!");
            }
          } catch (error) {
            console.error(
              "Error occurred:",
              error
            );
            toast.error(
              "An error occurred while processing payment."
            );
          }
        };

        sendRequest();
      },
      onError(error) {
        toast.error("Payment Error!");
      },
      onClose() {
        toast.warn("Payment Cancled!");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  const checkout = new KhaltiCheckout(config);

  return (
    <button
      id="payment-button"
      onClick={() =>
        checkout.show({ amount: amount * 100 })
      }
      className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-orange-50 hover:bg-orange-600"
    >
      Check out
    </button>
  );
}
Khalti.propTypes = khaltiProps;
