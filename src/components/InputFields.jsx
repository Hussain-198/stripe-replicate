import { motion } from "framer-motion";

function InputFields({
  divId,
  label,
  type,
  placeholder = "",
  value,
  onChange,
  error,
}) {
  return (
    <div id={divId} className="flex flex-col gap-2 pl-10 pr-10">
      <label htmlFor={divId} className="text-sm font-medium">
        {label}
      </label>
      <motion.input
        id={divId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default InputFields;
