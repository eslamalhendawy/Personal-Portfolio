const ToggleButton = ({ setOpen, open }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
    </button>
  );
};

export default ToggleButton;
