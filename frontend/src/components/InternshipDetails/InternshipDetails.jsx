import "./InternshipDetails.css";

const InternshipDetails = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute right-6 top-8 cursor-pointer"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-slate-100 rounded-t-xl">
          <div className="flex flex-col justify-between items-start px-7 py-6 pt-7 gap-2">
            <h2 className="text-xl font-semibold">
              Applying for {data.title}
            </h2>
            <p className="text-slate-600">{data.company}</p>
          </div>
        </div>
        <div className="border-b border border-slate300"></div>
        <div className="px-7 pb-7">
          <div className="mt-5 text-sm flex items-center gap-5 text-slate-500">
            <p>
              <span className="font-medium">Location:</span> {data.location}
            </p>
            <p>
              <span className="font-medium">Stipend:</span> {data.stipend}{" "}
              /month
            </p>
            <p>
              <span className="font-medium">Duration:</span> {data.duration}
            </p>
            <p>
              <span className="font-medium">Status:</span> {data.status}
            </p>
          </div>
          <div className="responsibilities mt-4 flex flex-col gap-2">
            <h4 className="font-medium text-lg">Key responsibilities</h4>
            <p className="text-[15.5px]">
              Selected intern day-to-day responsibilities include:
            </p>

            <div className="res mt-5 text-[15.6px]">
              <p>
                1. Assist in the design and implementation of website layouts,
                user interfaces, and other visual elements using HTML, CSS, and
                JavaScript.
              </p>
              <p>
                2. Engage in back-end development tasks, utilizing languages and
                frameworks such as PHP and MySQL.
              </p>
              <p>
                3. Write clean, maintainable, and well-structured code, adhering
                to industry best practices and coding standards.
              </p>
              <p>
                4. Stay abreast of the latest trends and advancements in web
                development to continuously refine your skills and knowledge.
              </p>
            </div>

            <div className="skills mt-5">
              <h4 className="font-medium text-lg">Skill(s) required</h4>
              <div className="mt-3 flex flex-wrap">
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  Tailwind
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  CSS
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  Nodejs
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  Reactjs
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  Docker
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  MongoDB
                </span>
                <span className="text-sm font-medium text-slate-600 bg-slate-100 py-1 px-3 rounded-3xl mr-4 mt-3">
                  Cloud
                </span>
              </div>
              <h4 className="font-medium text-lg mt-5">Number of openings</h4>
              <p className="mt-2">5</p>
            </div>
            <div className="border-b my-5"></div>
            <div className="text-end">
              <button className="bg-sky-400 py-2 px-6 font-bold text-white rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
