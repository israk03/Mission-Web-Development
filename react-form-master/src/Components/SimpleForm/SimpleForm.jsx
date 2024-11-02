export default function SimpleForm() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("btn clicked.");
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
