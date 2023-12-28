import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          gridTemplateColumns: ".65fr .35fr",
        }}
        className="flex flex-col gap-4 md:grid md:max-w-[750px]  lg:max-w-[790px]  xl:max-w-[1110px] m-auto"
      >
        <Home />
        <News />
      </div>
      <Trending />
      <Footer />
    </>
  );
}

export default App;
