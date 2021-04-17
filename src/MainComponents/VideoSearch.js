import React, { useContext } from "react";
import { addToHistory } from "../APICalls/userOperations";
import { MyContext } from "../Context/MyContext";
import UserContext from "../Context/UserContext";
import "./videoSearch.css";

const VideoSearch = () => {
  const [videos] = useContext(MyContext);
  const [userInfo] = useContext(UserContext);
  const pushToHistory = async (title, link) => {
    if (userInfo.user !== "" && userInfo.token !== "") {
      const resp = await addToHistory(userInfo, title, link);
      console.log(resp);
    }
  };
  React.useEffect(() => {}, [videos]);
  return (
    <div className="videoSearchBody">
      {videos[0] !== undefined && videos[0].items !== undefined ? (
        <div className="container">
          <p className="small mt-3">
            {"About " + videos[0].pageInfo.totalResults + " results"}
          </p>
          {videos[0].items.map((i, index) => {
            return (
              <div
                className="card noBo pointer mt-2 mb-2"
                onClick={() => {
                  pushToHistory(
                    "youtube.com",
                    "https://www.youtube.com/watch?v=" + i.id.videoId
                  );
                  window.open(
                    "https://www.youtube.com/watch?v=" + i.id.videoId
                  );
                }}
              >
                <div className="card-title">
                  <p className="h4 und">{i.snippet.title}</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="card">
                        <img
                          src={i.snippet.thumbnails.medium.url}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>{i.snippet.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default VideoSearch;
