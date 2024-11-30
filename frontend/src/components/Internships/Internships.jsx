import Card from "../Card/Card";

const Internships = () => {
  return (
    <>
      <section className="internshipWrapper bg-sky-100/30 border rounded-[2rem] mx-3 mb-10 shadow-sm md:mx-12">
        <div className="internshipContainer md:container md:mx-auto flex flex-col justiy-center items-center p-10 px-0">
          <h1 className="text-3xl text-center font-extrabold mb-5 mx-5">
            Trending on Internspot
          </h1>
          <div className="TrendInternCards flex items-center justify-center flex-wrap">
            <Card
              jobTitle={"Front End Developer"}
              companyName={"Lunacel"}
              location={"Work From Home"}
              stipend={"30,000"}
              duration={"4"}
            />
            <Card
              jobTitle={"Back End Developer"}
              companyName={"Alemeno"}
              location={"Gurgoan"}
              stipend={"15,000 - 20,000"}
              duration={"3"}
            />
            <Card
              jobTitle={"Java Developer"}
              companyName={"Nullclass"}
              location={"Delhi"}
              stipend={"25,000"}
              duration={"3"}
            />
            <Card
              jobTitle={"Computer Vision (Python)"}
              companyName={"Systemic"}
              location={"Work From Home"}
              stipend={"10,000"}
              duration={"2"}
            />
          </div>
        </div>
      </section>
      <div className="border-b mx-4 md:mx-12 mb-5"></div>
    </>
  );
};

export default Internships;
