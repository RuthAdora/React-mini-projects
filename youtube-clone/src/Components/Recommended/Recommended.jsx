import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";

import { API_KEY } from "../../data";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((items, index) => {
        return (
          <div key={index} className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
              <h4>Best channel that helps you to be a web developer</h4>
              <p>GreatStack</p>
              <p>126k views</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recommended;
