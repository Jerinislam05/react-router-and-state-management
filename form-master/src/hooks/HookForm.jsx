import useInputState from "./useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('jerin hooked');
    const emailState = useInputState('jerinislam05@gmail.com');

    const handleSubmit = e => {
        console.log(emailState.value);
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
