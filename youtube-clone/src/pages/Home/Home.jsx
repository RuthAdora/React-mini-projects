import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/feed";

const Home = ({ sidebar }) => {
  const [category, setCatogory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCatogory={setCatogory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
