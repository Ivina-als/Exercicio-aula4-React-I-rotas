function ButtonDefault({ name, redirection, divButton }) {
  return (
    <div className={divButton}>
      <button className="button-default" onClick={redirection}>
        {name}
      </button>
    </div>
  );
}

export default ButtonDefault;
