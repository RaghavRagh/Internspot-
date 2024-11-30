import "./CheckoutPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import SubscriptionInfo from "../../components/SubscriptionInfo/SubscriptionInfo";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../features/userSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const CheckoutPage = () => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/auth/login");
    }
  });

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const planName = searchParams.get("planName");
  const price = searchParams.get("price");
  const noOfInternship = searchParams.get("noOfInternship");
  const support = searchParams.get("support");
  const gradientColors = searchParams.get("gradientColors");

  const userInfo = useSelector(selectUserInfo);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(price);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const randomCoupon = Math.random().toString(36).substring(7).toUpperCase();
    setCoupon(randomCoupon);
  }, []);

  const handleDiscountChange = (event) => {
    const discountValue = parseInt(event.target.value);
    setDiscount(discountValue);
    const newPrice = price - (price * discountValue) / 100;
    setFinalPrice(newPrice);
  };

  // checkout handler
  const checkoutHandler = async (amount) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
      setLoading(false);
      return;
    }

    // const currentTime = new Date();
    // const currentHourIST = currentTime.getUTCHours() + 5.5;

    // if (currentHourIST < 10 || currentHourIST > 11) {
    //   alert("Payments are only allowed between 10 AM and 11 AM IST.");
    //   return;
    // }

    if (amount == 0) {
      navigate("/auth/login");
      return;
    }

    setLoading(false);

    // const {
    //   data: { key },
    // } = await axios.get("https://internspot-backend.vercel.app/getKey");
    const {
      data: { key },
    } = await axios.get("http://13.203.31.33/getKey");

    try {
      setLoading(true);
      const response = await axios.post(
        // "https://internspot-backend.vercel.app/payment",
        "http://13.203.31.33/payment",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
      const order = response.data.order;

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Raghav",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async function (response) {
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verificationResponse = await axios.post(
              // "https://internspot-backend.vercel.app/paymentverification",
              "http://13.203.31.33/paymentverification",
              data,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );

            if (verificationResponse.data.status === "success") {
              setLoading(false);
              alert("Payment successful and verified!");
              navigate("/internships");
              console.log(verificationResponse.data);
            } else {
              setLoading(false);

              alert("Payment verification failed.");
            }
          } catch (error) {
            setLoading(false);
            console.error("Verification error:", error);
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#38bdf8",
        },
      };

      const razor = new window.Razorpay(options);
      razor.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      razor.open();
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="checkoutWrapper pb-10">
      <div className="md:container md:mx-auto flex items-center justify-center">
        <div className="mx-4 flex-col space-y-10 lg:flex lg:flex-row items-center justify-center gap-12 mt-4">
          <div className="flex flex-col p-5 border rounded-xl gap-2 bg-white shadow">
            <div className="flex gap-5">
              <div className="formGroup flex flex-col gap-2">
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  value={userInfo?.name}
                  className="border p-2 rounded-md text-slate-500 max-w-40"
                  disabled
                />
              </div>

              <div className="formGroup flex flex-col gap-2">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  value={userInfo?.email}
                  className="border p-2 rounded-md text-slate-500 max-w-40"
                  disabled
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="font-medium">
                Coupon : <strong>{coupon}</strong>
              </p>
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label htmlFor="discount">
                <span className="font-medium">Choose discount</span> (1% - 10%):{" "}
              </label>
              <select
                id="discount"
                value={discount}
                className="p-1.5 border w-full rounded-lg"
                onChange={handleDiscountChange}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}%
                  </option>
                ))}
              </select>
            </div>

            <div
              className={`priceInfo flex items-center justify-between bg-gray-100 p-2 rounded-lg`}
            >
              <div className="p-2 w-2/5 font-bold text-2xl text-slate-700">
                ₹{finalPrice}
              </div>
              <button
                className="bg-white p-2 rounded-lg w-2/5 mr-1 border shadow text-center hover:shadow-md transition"
                onClick={() => checkoutHandler(finalPrice)}
              >
                {loading ? (
                  <ClipLoader color="black" size={20} />
                ) : (
                  <span>Pay Now</span>
                )}
              </button>
            </div>
          </div>

          <SubscriptionInfo
            planName={planName}
            price={price}
            noOfInternship={noOfInternship}
            support={support}
            gradientColors={gradientColors}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
