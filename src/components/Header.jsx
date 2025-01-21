import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      {/* 이모지는 window + .을 이용하여 추가 */}
      <h3>오늘은📆 </h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
