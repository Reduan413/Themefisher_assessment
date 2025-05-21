// components/InputField.jsx
const InputField = ({ name, type = "text", value, placeholder, onChange, textarea = false }) => {
  const classes =
    "p-3 rounded-lg bg-black border border-[#f8912259] text-white w-full  ring-offset-0 border-[#f8912259] focus:outline-none focus:ring-[1px] focus:ring-[#F89222]";

  return (
    <div className={`${textarea ? "col-span-2" : ""}`}>
      <p className="font-dmSans font-medium text-xl text-[#ffffff] mb-2">{placeholder}</p>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${classes} h-32`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes}
        />
      )}
    </div>
  );
};

export default InputField;
