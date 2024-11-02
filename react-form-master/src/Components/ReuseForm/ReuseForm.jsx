export default function ReuseForm({
  formTitle,
  submitBtnText = "submit",
  handleSubmitForm,
  children,
}) {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    handleSubmitForm(data);
  };
  return (
    <div>
      {children}
      {/* <h2>{formTitle}</h2> */}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
}
