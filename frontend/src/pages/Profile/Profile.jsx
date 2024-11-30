import { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProfileUpdateSuccess,
  selectUserInfo,
  selectUserLoading,
  updateProfile,
} from "../../features/userSlice";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectUserLoading);
  const profileUpdateSuccess = useSelector(selectProfileUpdateSuccess);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    }
    // else if (userInfo) {
    //   setProfileData({
    //     name: userInfo.name,
    //     phone: userInfo.phone,
    //     avatar:
    //       userInfo.avatar ||
    //       "https://i.pinimg.com/564x/e6/7a/7c/e67a7c5053ee399cb184754cee0e6d42.jpg",
    //   });
    // }
  }, [userInfo, navigate]);

  const [profileData, setProfileData] = useState({
    name: userInfo?.name || "",
    phone: userInfo?.phone || "",
    avatar:
      userInfo?.avatar ||
      "https://i.pinimg.com/564x/e6/7a/7c/e67a7c5053ee399cb184754cee0e6d42.jpg",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("phone", profileData.phone);
    if (profileData.avatar !== userInfo.avatar) {
      formData.append("avatar", profileData.avatar);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    dispatch(updateProfile(formData));

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        // "https://internspot-backend.vercel.app/user/profile",
        "https://localhost:5173/user/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="profileContainer flex justify-center items-center">
        <div className="profileWrapper mx-3 my-10 p-8 flex flex-col border-2 rounded-xl w-[29rem] items-center shadow-lg">
          <h1 className="profile mb-5 font-semibold text-5xl">Profile</h1>
          <div className="profileInfo mt-5 w-full">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="profileForm flex flex-col items-center">
                <div className="relative">
                  <div className="profilePhoto w-36 h-36 flex justify-center items-center border rounded-full object-cover overflow-hidden shadow hover:shadow-lg transition-shadow ease-linear">
                    {/* <img src={userInfo?.avatar} alt="profile photo" /> */}
                    <img
                      src="https://i.pinimg.com/736x/cd/8b/10/cd8b107705fbb4e1870cf2807f28f311.jpg"
                      alt="profile photo"
                    />
                  </div>
                  <span className="absolute bottom-3 right-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="profileForm flex flex-col">
                <label htmlFor="name" className="font-medium ml-1">
                  Name
                </label>
                <input
                  className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                  name="name"
                  type="text"
                  value={profileData?.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profileForm flex flex-col">
                <label htmlFor="phone" className="font-medium ml-1">
                  Phone
                </label>
                <input
                  className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                  type="text"
                  name="phone"
                  value={profileData?.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profileForm flex flex-col">
                <label htmlFor="language" className="font-medium  ml-1">
                  Avatar url
                </label>
                <input
                  className="border rounded-md mt-1 p-2 outline-none hover:ring-2 focus:ring-2 focus:ring-indigo-300"
                  name="language"
                  value={profileData?.avatar}
                  onChange={handleInputChange}
                ></input>
              </div>
              <button
                className="bg-sky-400 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center mt-2"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
