import MobileImg from "./../assets/images/image-web-3-mobile.jpg";
import DesktopImg from "./../assets/images/image-web-3-desktop.jpg";

const Home = () => {
  return (
    <section id="home">
      {/* Mobile home */}
      <div className="px-4 py-4 max-w-[450px] m-auto flex flex-col gap-6 md:hidden">
        <img src={MobileImg} alt="home image"></img>
        <h1 className="text-5xl font-bold leading-12">
          The Bright Future of Web 3.0?
        </h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a className="bg-[tomato] px-8 py-2 text-center text-white font-medium text-[16px] w-fit">
          READ MORE
        </a>
      </div>

      {/* Bigger devices home */}
      <div className="hidden md:flex flex-col gap-6 md:max-w-[750px] items-center  lg:max-w-[790px]  xl:max-w-[1110px] m-auto">
        <img src={DesktopImg} alt="home image"></img>
        <div
          style={{ gridTemplateColumns: "1fr 1fr" }}
          className="md:flex flex-col justify-between gap-8 xl:grid"
        >
          <h1 className="text-5xl font-bold leading-12 w-[75%]">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between  gap-6">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a className="bg-[tomato] px-8 py-2 text-center text-white font-medium text-[16px] w-fit lg:hover:bg-black duration-200 cursor-pointer">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
