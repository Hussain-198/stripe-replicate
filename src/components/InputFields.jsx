import { motion } from "framer-motion";

function InputFields({divId, label, type, placeholder = "", value,onChange}) {
    return (
        <div id={divId} className="flex flex-col gap-2 pl-10 pr-10">
            <label htmlFor={divId} className="text-sm font-medium">{label}</label>
        <motion.input
            id={divId}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 rounded-md border border-gray-300"
        />
        </div>
    )
}

export default InputFields;