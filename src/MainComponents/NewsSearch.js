import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import UserContext from "../Context/UserContext";
import { addToHistory } from "../APICalls/userOperations";
import "./newsSearch.css";

const NewsSearch = () => {
  const [news] = useContext(MyContext);
  const [userInfo] = useContext(UserContext);
  React.useEffect(() => {}, [news]);
  const pushToHistory = async (title, link) => {
    if (userInfo.user !== "" && userInfo.token !== "") {
      const resp = await addToHistory(userInfo, title, link);
      console.log(resp);
    }
  };
  return (
    <div className="newsSearchBody">
      <div className="container">
        {news[0] !== undefined && news[0].results !== undefined
          ? news[0].results.stories.map((i, index) => {
              return (
                <div className="row mt-3" key={index}>
                  <div className="col-lg-8 col-md-10 col-sm-12">
                    <div
                      className="card news"
                      onClick={() => {
                        pushToHistory(i.source, i.url);
                        window.open(i.url);
                      }}
                    >
                      <div className="row">
                        <div className="col-lg-8 col-md-6 col-sm-12">
                          <div className="card noBo">
                            <div className="card-body">
                              <p>{i.source}</p>
                              <p className="h5 blue">{i.title}</p>
                              <p>
                                {i.excerpt.split("").slice(0, 100).join("")}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="card noBo imgCard p-3">
                            <img
                              src={i.image_url}
                              alt=""
                              className="card-img-top imgCard"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default NewsSearch;
