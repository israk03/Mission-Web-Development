import { useState } from "react";

const useInputState = (defaultVlue = "") => {
  const [value, setValue] = useState(defaultVlue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   return [value, handleChange];
};

export default useInputState;
