import RetroPC from "./../assets/images/image-retro-pcs.jpg";
import TopLaptops from "./../assets/images/image-top-laptops.jpg";
import GamingGrowth from "./../assets/images/image-gaming-growth.jpg";

const TrendingItem = ({ title, img, text, number }) => {
  return (
    <div
      className="grid gap-6 items-center md:h-fit md:w-[85%]"
      style={{ gridTemplateColumns: ".3fr .7fr" }}
    >
      <img src={img} alt="news image" className="h-full md:object-cover"></img>
      <div className="py-2">
        <span className="font-bold text-4xl text-gray-300">{number}</span>
        <h2 className="text-xl font-bold lg:hover:text-[tomato] lg:cursor-pointer duration-200">
          {title}
        </h2>
        <p className="font-thin">{text}</p>
      </div>
    </div>
  );
};

const Trending = () => {
  const data = [
    {
      number: "01",
      img: RetroPC,
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      number: "02",
      img: TopLaptops,
      title: "Top 10 Laptopts of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      number: "03",
      img: GamingGrowth,
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <section id="trending">
      {/*Mobile trending*/}
      <div className="md:hidden px-4 flex flex-col gap-6 max-w-[450px] m-auto mb-8">
        {data.map((elem, index) => {
          return (
            <TrendingItem
              title={elem.title}
              img={elem.img}
              text={elem.text}
              number={elem.number}
              key={index}
            ></TrendingItem>
          );
        })}
      </div>

      {/*Bigger devices trending*/}
      <div className="hidden md:flex flex-row gap-6 md:max-w-[750px]  lg:max-w-[790px]  xl:max-w-[1110px] m-auto mb-8">
        {data.map((elem, index) => {
          return (
            <TrendingItem
              title={elem.title}
              img={elem.img}
              text={elem.text}
              number={elem.number}
              key={index}
            ></TrendingItem>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
