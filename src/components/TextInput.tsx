import React, { useState } from "react";

type TextInputProps = {
  placeholder?: string,
  initialValue?: string,
  handleSubmit: (value: string) => void,
};

const TextInput = ({ placeholder = "", initialValue = "", handleSubmit }: TextInputProps) => {
  const [value, setValue] = useState<string>(initialValue);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(value);
    setValue("");
  };


  return (
    <form onSubmit={onSubmit} className="flex justify-center size-full bg-gray-200">
        <div className="flex m-2 bg-grey-200">
            <input type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className="flex bg-white border px-2" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
                Enter
            </button>
        </div>
    </form>
  )
};

export default TextInput;
