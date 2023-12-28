import React from "react";

const NewsItem = ({ title, text, border }) => {
  return (
    <div
      className={`flex flex-col gap-4 ${border ? "border-b-[1px] pb-6" : null}`}
    >
      <h2 className="text-white text-xl font-bold lg:hover:text-[#e9ab53] duration-200 cursor-pointer">
        {title}
      </h2>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

const News = () => {
  const data = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
      border: true,
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI Image generation?",
      border: true,
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <section id="new" className="px-4 mb-8 md:px-0">
      {/* News mobile */}
      <div className="px-4 py-4 bg-[#00001a] max-w-[450px] m-auto flex flex-col gap-6 md:hidden">
        <h1 className=" text-3xl text-[#e9ab53] font-bold">New</h1>
        <div className="flex flex-col gap-6">
          {data.map((elem, index) => {
            return (
              <NewsItem
                title={elem.title}
                text={elem.text}
                key={index}
                border={elem.border}
              ></NewsItem>
            );
          })}
        </div>
      </div>

      {/* News bigger devices */}
      <div className="hidden md:flex bg-[#00001a] py-10 px-6 flex-col gap-8">
        <h1 className=" text-3xl text-[#e9ab53] font-bold">New</h1>
        <div className="flex flex-col gap-6">
          {data.map((elem, index) => {
            return (
              <NewsItem
                title={elem.title}
                text={elem.text}
                key={index}
                border={elem.border}
              ></NewsItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
