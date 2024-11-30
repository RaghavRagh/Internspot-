import { useState } from "react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import "./Register.css";
import { auth, provider } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    avatar: "" | "https://i.pinimg.com/736x/eb/8a/dd/eb8addac91cec1bba36b57ad28729f17.jpg"
  });

  const registerFunction = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserExist(false);
    setLoading(true);

    try {
      const response = await axios.post(
        // "http://localhost:8000/auth/register",
        // "https://internspot-backend.vercel.app/auth/register",
        "https://13.203.31.33/auth/register",
        userRegistration
      );

      setLoading(false);
      if (response.data.message === "User already exists") {
        setUserExist(true);
      }

      const { token, user } = response.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/");
      }

      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="registerWrapper flex justify-center items-center">
      <div className="registerContainer mx-3 my-10 p-8 flex flex-col border-2 rounded-xl w-[29rem] justify-center items-center shadow-lg transition-shadow ease-in bg-white relative">
        <h1 className="mb-10 font-semibold text-5xl">Register</h1>
        <button
          className="googleSignin w-full flex justify-center items-center gap-6 border rounded-lg p-2 font-medium border-b-4 hover:shadow-md transition ease-in"
          onClick={registerFunction}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg>
          </span>
          Sign in with Google
        </button>
        <div className="w-full my-8 border-b-2"></div>
        {/* register form */}
        <div className="registerFormInfo  w-full">
          <form
            action="POST"
            className="flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <div className="registerInfo flex flex-col mb-4">
              {userExist && (
                <div className="text-sm text-red-600">
                  {" "}
                  User already exists!
                </div>
              )}
              <label htmlFor="" className="font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                value={userRegistration.name}
                onChange={handleInput}
              />
            </div>
            <div className="loginInfo flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                value={userRegistration.email}
                onChange={handleInput}
              />
            </div>
            <div className="loginInfo flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                value={userRegistration.password}
                onChange={handleInput}
              />
            </div>
            <div className="loginInfo flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                value={userRegistration.phone}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-1 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center mt-2"
            >
              {loading ? (
                <ClipLoader color="white" size={20} />
              ) : (
                <span>Register</span>
              )}
            </button>
          </form>
          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <span className="text-sky-500">
              <Link to={"/auth/login"}>Login here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
