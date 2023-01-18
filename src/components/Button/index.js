function ButtonDefault({ name, url }) {
  return (
    <button
      className="button-default"
      onClick={() => (window.location.href = url)}
    >
      {name}
    </button>
  );
}

export default ButtonDefault;
