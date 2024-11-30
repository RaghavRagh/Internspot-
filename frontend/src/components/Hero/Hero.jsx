const Hero = () => {
  return (
    <section className="heroWrapper mt-8">
      <div className="heroContainer md:container md:mx-auto p-4 md:flex items-center justify-around">
        {/* left-side */}
        <div className="heroLeft flex flex-col items-start">
          <div className="heroTitle text-6xl text-slate-900 font-bold leading-tight">
            <h1>
              Find the perfect <br />{" "}
              <span className="text-sky-400">internship</span> <br /> for you
            </h1>
          </div>
          <div className="heroDescription my-6">
            <p className="flex flex-col text-slate-400 font-medium md:text-lg tracking-tight max-w-[30rem]">
              <span>Empowering tomorrow's leaders today through immersive internships - join us and pave your path to success!</span>
              {/* <span>Join us and pave your path to success!</span> */}
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="heroRight flex items-center justify-center">
          <div className="imageContainer">
            <img src="./workTeamAbstract.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
