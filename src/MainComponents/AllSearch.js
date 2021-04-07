import React from "react";
import { MyContext } from "../Context/MyContext";
import "./AllSearch.css";

export const AllSearch = () => {
  const [result] = React.useContext(MyContext);
  React.useEffect(() => {}, [result]);
  return (
    <div className="allSearchBody">
      {result[0] !== undefined && result[0].items !== undefined ? (
        <div className="container">
          <p className="small mt-3">
            {"About " +
              result[0].searchInformation.formattedTotalResults +
              " results (" +
              result[0].searchInformation.formattedSearchTime +
              " seconds)"}
          </p>
          {result[0].items.map((i, index) => {
            console.log(i);
            return (
              <div
                className="card noBo mt-3 mb-3"
                key={index}
                onClick={() => {
                  window.open(i.link);
                }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <p className="pointer">{i.displayLink}</p>
                    <p className="h5 link">{i.title}</p>
                    <p>{i.snippet}</p>
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
