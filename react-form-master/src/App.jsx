import "./App.css";
import ReuseForm from "./Components/ReuseForm/ReuseForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import StateForm from "./Components/StateForm/StateForm";

function App() {
  const handleSignUpSubmitForm = (data) => {
    console.log("Sign Up data: ", data);
  };

  const handleUpdateSubmitForm = (data) => {
    console.log("Update Profile Data: ", data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseForm
        formTitle={"Sign UP"}
        submitBtnText="Sign Up"
        handleSubmitForm={handleSignUpSubmitForm}
      >
        <div>
          <h2>Please sign up right now.</h2>
        </div>
      </ReuseForm>

      <ReuseForm
        formTitle={"Update Profile"}
        submitBtnText="Update"
        handleSubmitForm={handleUpdateSubmitForm}
      >
        <div>
          <h2>Please always keep your profile update.</h2>
        </div>
      </ReuseForm>
    </>
  );
}

export default App;
