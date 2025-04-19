import axios from "axios";
import { Button } from "../ui/Button";

function Payment() {
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "https://api.instamojo.com/v2/payment_requests/",
        {
          purpose: "Test Payment",
          amount: 100,
          buyer_name: "John Doe",
          email: "john.doe@example.com",
          phone: "9876543210",
          redirect_url: "http://http://localhost:5173//payment-success",
        },
        {
          headers: {
            "X-Api-Key": "519b44be810b04fb622b79fcecdc61ca",
            "X-Auth-Token": "ddd81bb82765bd3203869e244df96059",
          },
        },
      );

      // Redirect user to payment URL
      window.location.href = response.data.payment_request.longurl;
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <Button onClick={handlePayment}>Pay Now</Button>
    </div>
  );
}
export default Payment;
