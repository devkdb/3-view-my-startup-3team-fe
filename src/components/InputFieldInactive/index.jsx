import "../InputFieldInactive/index.css";

function InputInactive({ onClick, children }) {
  
  return (
    <div className="inactive" onClick={onClick}>
      <div className="inactiveFill">
        {children} {/*자식요소 렌더링*/}
      </div>
    </div>
  );
}

export default InputInactive;
