import useInputState from "../../hooks/useInputState";

export default function HookForm() {
  //   const [name, handleNameChange] = useState("Rojoni");
  const emailState = useInputState("rojoni@sojoni.go");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log("Name: ", name);
    console.log(emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
