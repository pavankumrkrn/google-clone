import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { addToHistory } from "../APICalls/userOperations";
import { MyContext } from "../Context/MyContext";
import UserContext from "../Context/UserContext";
import "./imageSearch.css";

const ImageSearch = () => {
  const [userInfo] = useContext(UserContext);
  const { type } = useParams();
  const { push } = useHistory();
  const [result] = useContext(MyContext);
  const pushToHistory = async (title, link) => {
    if (userInfo.user !== "" && userInfo.token !== "") {
      const resp = await addToHistory(userInfo, title, link);
      console.log(resp);
    }
  };
  React.useEffect(() => {}, [result]);
  console.log(result);
  return (
    <div className="container-fluid imgSearch">
      {result[0] !== undefined && result[0].relatedSearches !== undefined ? (
        <>
          <div className="mt-3">
            <div className="related">
              {result[0].relatedSearches.slice(0, 15).map((i, index) => {
                return (
                  <div
                    className="p-2 pl-4 pr-4 rel mr-3"
                    key={index}
                    onClick={() => {
                      push("/search/" + i.text + "/" + type);
                    }}
                  >
                    {i.text}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row mt-4">
            {result[0].value.map((i, index) => {
              return (
                <div className="col-lg-2 col-md-4 col-6 mb-4" key={index}>
                  <div
                    className="card noBo mb-3"
                    onClick={() => {
                      pushToHistory(i.hostPageDomainFriendlyName, i.contentUrl);
                      window.open(i.contentUrl);
                    }}
                  >
                    <img
                      src={i.contentUrl}
                      alt=""
                      className="card-img-top iCard noBo"
                    />
                  </div>
                  <p className="h6 und">{i.name}</p>
                  <p className="und">{i.hostPageDomainFriendlyName}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageSearch;
