function InputLogin({ label, type }) {
  return (
    <form className="container-input">
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} className="input-user" />
    </form>
  );
}

export default InputLogin;
