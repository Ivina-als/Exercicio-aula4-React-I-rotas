function AnchorDefault({ name, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
}

export default AnchorDefault;
