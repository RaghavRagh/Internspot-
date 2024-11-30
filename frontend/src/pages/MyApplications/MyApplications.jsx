import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyApplications.css";

const MyApplications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="appliWrapper md:container md:mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        My applications
      </h1>
      <div className="flex justify-center">
        <table className="companyList w-[60rem] rounded-xl overflow-hidden mb-10 border-collapse table-fixed">
          <thead className="bg-slate-200">
            <tr className="header">
              <th className="p-5">COMPANY</th>
              <th className="p-5">PROFILE</th>
              <th className="p-5">APPLIED ON</th>
              <th className="p-5">REVIEW APPLICATION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-center">
              <td className="p-5">Nullclass</td>
              <td className="p-5">Java Developer</td>
              <td className="p-5">22 July 2024</td>
              <td className="p-5">here</td>
            </tr>
            <tr className="border-b text-center">
              <td className="p-5">Nullclass</td>
              <td className="p-5">Java Developer</td>
              <td className="p-5">22 July 2024</td>
              <td className="p-5">here</td>
            </tr>
            <tr className="border-b text-center">
              <td className="p-5">Nullclass</td>
              <td className="p-5">Java Developer</td>
              <td className="p-5">22 July 2024</td>
              <td className="p-5">here</td>
            </tr>
            <tr className="border-b text-center">
              <td className="p-5">Nullclass</td>
              <td className="p-5">Java Developer</td>
              <td className="p-5">22 July 2024</td>
              <td className="p-5">here</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
