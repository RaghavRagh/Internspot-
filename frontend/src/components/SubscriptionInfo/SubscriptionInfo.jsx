import { useNavigate } from "react-router-dom";

const SubscriptionInfo = ({
  planName,
  price,
  noOfInternship,
  support,
  gradientColors,
}) => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
      return;
    }
    navigate(
      `/checkout?planName=${planName}&price=${price}&noOfInternship=${noOfInternship}&support=${support}&gradientColors=${gradientColors}`
    );
  };

  return (
    <div className="flex flex-col max-w-lg p-3 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow xl:p-3 sm:min-w-72 hover:shadow-lg transition ease-out">
      <h3
        className={`mb-4 text-2xl font-semibold border p-6 text-white rounded-lg px-5 text-center  ${gradientColors}`}
      >
        {planName}
      </h3>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-4xl font-extrabold text-slate-800">
          ₹{price}
        </span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-full flex flex-col">
            <span className="text-sm font-semibold text-slate-400">
              Plan name
            </span>
            <span className="font-semibold">{planName}</span>
            <div className="border-b my-2"></div>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-full flex flex-col">
            <span className="text-sm font-semibold text-slate-400">
              No. of internship applications
            </span>
            <span className="font-semibold">
              {noOfInternship}
              <span className=" text-slate-500 font-normal text-sm">
                {" "}
                /month
              </span>
            </span>
            <div className="border-b my-2"></div>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-full flex flex-col">
            <span className="text-sm font-semibold text-slate-400">
              Support
            </span>
            <span className="font-semibold">{support}</span>
            <div className="border-b my-2"></div>
          </div>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="w-full flex flex-col">
            <span className="text-sm font-semibold text-slate-400">Price</span>
            <span className="font-semibold">
              {price}
              <span className=" text-slate-500 font-normal text-sm">
                {" "}
                /month
              </span>
            </span>
            <div className="border-b my-2"></div>
          </div>
        </li>
      </ul>

      <button
        className="focus:ring-2 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-slate-300 hover:bg-sky-100/40 transition ease-linear shadow"
        onClick={handleGetStartedClick}
      >
        Get started
      </button>
    </div>
  );
};

export default SubscriptionInfo;
