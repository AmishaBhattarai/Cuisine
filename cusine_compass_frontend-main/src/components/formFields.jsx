import React from "react";
import { formFielsProps } from "./props/formFields";

export default function Formfield({
  title,
  req,
  type,
  name,
  value,
  onchange,
  onblur,
  id,
  error,
  touched,
  placeholder,
  className,
}) {
  return (
    <div className="h-[80px]">
      {title && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {title}
          <span className="mb-2 text-md text-red-600">
            {req ? "*" : null}
          </span>
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={
          placeholder ? placeholder : ""
        }
        value={value}
        onChange={onchange}
        onBlur={onblur}
        id={id}
        autoComplete={"false"}
        className={className}
      />
      {error && touched ? (
        <span className="font-light text-red-400 mx-6 mb-2">
          {error}
        </span>
      ) : null}
    </div>
  );
}
Formfield.propTypes = formFielsProps;
