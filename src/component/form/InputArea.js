import React from "react";
import Label from "@component/form/Label";

const InputArea = ({
  register,
  defaultValue,
  name,
  label,
  type,
  placeholder,
  Icon,
  list = [],
  ...rest // This will include onChange and other additional props
}) => {
  return type === "select" ? (
    <SelectField
      register={register}
      defaultValue={defaultValue}
      name={name}
      label={label}
      placeholder={placeholder}
      Icon={Icon}
      list={list}
      {...rest} // Ensure onChange is passed to SelectField
    />
  ) : (
    <InputField
      register={register}
      defaultValue={defaultValue}
      name={name}
      label={label}
      type={type}
      placeholder={placeholder}
      Icon={Icon}
      {...rest} // Ensure onChange is passed to InputField
    />
  );
};


function SelectField({
  register,
  defaultValue,
  name,
  label,
  placeholder,
  Icon,
  list = [],
  ...rest
}) {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}

        <select
          {...register(name, {
            required: `${label} is required!`,
          })}
          defaultValue={defaultValue}
          placeholder={placeholder}
          name={name}
          className={
            Icon
              ? "py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
              : "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
          }
          {...rest}
        >
          {list.length > 0 ? (
            list.map((e, index) => (
              <option key={index} value={e}>
                {e.toUpperCase()}
              </option>
            ))
          ) : (
            <option value="">Select...</option>
          )}
        </select>
      </div>
    </>
  );
}

function InputField({
  register,
  defaultValue,
  name,
  label,
  type,
  placeholder,
  Icon,
  ...rest
}) {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`, {
            required: `${label} is required!`,
          })}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          name={name}
          className={
            Icon
              ? "py-2 pl-10 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
              : "py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
          }
          {...rest}
        />
      </div>
    </>
  );
}

export default InputArea;
