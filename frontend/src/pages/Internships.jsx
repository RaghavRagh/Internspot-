import { useEffect, useState } from "react";
import SlantCards from "../components/Card/SlantCards";
import InternshipDetails from "../components/InternshipDetails/InternshipDetails";
import axios from "axios";
import { PuffLoader } from "react-spinners";

const statuses = ["Few hours ago", "Just now"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const Internships = () => {
  const [cardDataArray, setCardDataArray] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:8000/getInternships"
          // "https://internspot-backend.vercel.app/getInternships"
          "http://13.203.31.33:8000/getInternships"
        );
        const data = response.data;
        setLoading(false);

        const dataWithStatus = data.map((internship) => ({
          ...internship,
          status: getRandomElement(statuses),
        }));

        setCardDataArray(dataWithStatus);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  const handleCardClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCardData(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="internshipWrapper bg-gray-100/40">
      <div className="bg-gradient-to-r from-cyan-200 to-blue-200 mb-5 text-center text-4xl font-extrabold py-10 sm:p-10 p-4 text-white tracking-tight">
        Find your internships
      </div>
      <div className="internshipContainer md:container md:mx-auto flex flex-col items-center justify-center">
        {error && (
          <div className="text-sm text-red-600 bg-red-200 p-1 px-2 rounded-sm mb-2 border border-red-400">
            {error}
          </div>
        )}
        {loading ? (
          <div className="h-screen text-center space-y-10">
            <PuffLoader size={50} />
          </div>
        ) : (
          <>
            {cardDataArray.map((cardData, index) => (
              <SlantCards
                key={index}
                {...cardData}
                onClick={() => handleCardClick(cardData)}
              />
            ))}
          </>
        )}
      </div>
      <InternshipDetails
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        data={selectedCardData}
      />
    </div>
  );
};

export default Internships;
