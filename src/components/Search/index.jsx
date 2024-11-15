import "./index.css";
import { useState } from "react";
import SearchIcon from "../../assets/images/icons/search/ic_search.png";
import DeleteIcon from "../../assets/images/icons/ic_delete.png";

function SearchComponent() {
  const [text, setText] = useState("");

  var type_num;
  if (text === "") {
    type_num = 0;
  } else {
    type_num = 1;
  }

  var noType_num;
  if (text === "") {
    noType_num = 1;
  } else {
    noType_num = 0;
  }

  function changeInput(e) {
    setText(e.target.value);
  }

  return (
    <div className="searchWrapper">
      <img src={SearchIcon} alt="돋보기" style={{ opacity: noType_num }} />
      <input
        // className="searchInput"
        className={`searchInput ${text ? "hasText" : ""}`} // 입력값이 있을 때 'hasText' 클래스를 추가
        placeholder="검색어를 입력해주세요"
        onChange={changeInput}
        value={text}
      />
      <img
        // className="delete"
        className={`delete ${text ? "show" : ""}`} // 텍스트가 있으면 show 클래스를 추가
        src={DeleteIcon}
        alt="삭제"
        onClick={() => setText("")}
        style={{ opacity: type_num }}
      />
      <img src={SearchIcon} alt="돋보기" style={{ opacity: type_num }}/>
    </div>
  );
}

export default SearchComponent;
