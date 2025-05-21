const FooterButton = ({text}) => {
  return (
    <button className="flex items-center justify-center rounded-full bg-[#1D2221] from-[#F5BD4D] to-[#F89222] font-dmSans text-xs font-normal text-white transition-colors hover:bg-gradient-to-r h-8 w-8 extraLg:h-10 extraLg:w-10">
      {text}
    </button>
  );
};
export default FooterButton;
