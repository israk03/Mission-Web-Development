import { useEffect, useRef } from "react";

export default function RefForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="text" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
