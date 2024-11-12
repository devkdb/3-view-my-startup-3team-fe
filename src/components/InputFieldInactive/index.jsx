import "../InputFieldInactive/index.css";

function InputInactive({ children }) {
  return (
    <div className="inactive">
      <div className="inactiveFill">
        {children} {/*자식요소 렌더링*/}
      </div>
    </div>
  );
}

export default InputInactive;
