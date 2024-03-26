
import CamaImage from '../images/h1.jpeg'

const Profitcast = () => {
  const cards = [
    {
      imageSrc: "/card.jpeg",
      heading: "Zero-risk",
      paragraph:
      "Embark on a journey of transformation with our innovative website development solutions: crafting digital experiences that propel your brand to new heights."    
    },
    {
      imageSrc: "/lady-idea.jpeg",
      heading: "Tailored ad strategy",
      paragraph:
      "Ascend the ranks of search engines with our comprehensive SEO strategies: leveraging the latest techniques and algorithms to maximize your visibility and reach."    
    },
    {
      imageSrc: "/puzzle-part.jpeg",
      heading: "Maximized ROI",
      paragraph:
      "Achieve remarkable outcomes without the unnecessary frills: our holistic approach to website development, SMM, and SEO delivers tangible results that exceed expectations."
    },
      {
      imageSrc: "/rotation-work.jpeg",
      heading: "Feedback focused",
      paragraph:
        "We listen, adapt, and evolve, always keeping your feedback at the forefront. With Profitcast, it's a collaborative crescendo!",
    },
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="shadow-xl p-6 bg-gray-100 border rounded-2xl relative w-full md:max-w-4xl lg:max-w-5xl">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl font-bold mb-2 relative text-center">
            {/* <img src={CamaImage} alt="Logo" className="absolute top-0 left-0 w-12 h-12 md:w-auto md:h-auto" style={{ marginTop: "-30px", marginLeft: "-30px" }}/> */}
            Why Work with WHY GLOBAL SERVICES💡
          </h2>
          <p className="text-lg">Impressive outcomes, no unnecessary extras.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="w-full">
              <div className=" bg-white rounded-lg shadow-lg p-1 h-full flex">
                <div className="mr-4">
                  <img
                    src={card.imageSrc}
                    alt="Image"
                    className="w-80 h-48 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
                  <p className="text-black">{card.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
  {/* <button className="relative overflow-hidden h-[5rem] w-[10rem] bg-orange-600"> */}
  <button className=" xl:w-56 xl:h-12 lg:w-56 lg:h-12 md:w-40 md:h-10 sm:w-40 sm:h-10 w-36 h-9 bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50 text-white text-2xl font-semibold ">
  Contact Us
        </button>
    {/* <span className="absolute bg-gradient-to-r from-orange-400 to-orange-600 top-0 left-0 w-full h-full animate-moveShade"></span>
    <span className="bg-orange-500 hover:bg-orange-900 text-white font-bold py-8 px- rounded-full z-10 relative"> */}
     
    {/* </span> */}
  {/* </button> */}
</div>
      </div>
    </div>
  );
};

export default Profitcast;
