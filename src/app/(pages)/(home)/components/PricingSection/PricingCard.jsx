const PricingCard = ({ plan }) => {
  return (
    <div className="w-full bg-[#000000] py-12 shadow-md">
      <div className="w-fit rounded-r-full bg-gradient-to-r from-[#f5bd4d67] to-[#f891226c] px-6 py-3 font-dmSans text-base font-bold text-[#ffffff]">
        {plan?.title}
      </div>

      <div className="px-6 pt-6">
        <h3 className="font-dmSans text-5xl font-bold text-white">
          ${plan?.price}
          <span className="text-lg font-medium">/month</span>
        </h3>
        <ul className="mt-7 space-y-4 bg-[#121414] px-4 py-6 text-sm text-gray-400">
          {plan?.features?.map((item, index) =>
            item?.isAllow ? (
              <li key={index} className="font-dmSans text-base font-normal text-[#ffffff]">
                {item?.text}
              </li>
            ) : (
              <li key={index}>
                <del className="font-dmSans text-base font-normal text-[#979797]">{item?.text}</del>
              </li>
            ),
          )}
        </ul>
        <div className="group w-fit rounded-lg bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-[1px] transition-all duration-300 mt-8">
          <button className="rounded-lg bg-black px-6 py-3 transition-all duration-300 group-hover:bg-transparent">
            <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-base font-bold text-transparent transition-all duration-300 group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
