import React from "react";
import { getLocations } from "services/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, LoaderContainer } from "utils/style/atom";

function Card() {
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
      setData(getLocations());
      setDataLoading(false);
  }, []);


  return (
    <>
      <div className="cardContainer">
        {isDataLoading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          data &&
          data.length > 0 &&
          data.map((el, i) => {
            return (
              <Link key={i} to={{ pathname: "location/" + el.id }}>
                <div
                  style={{
                    backgroundImage: `url(${el.cover})`,
                  }}
                  className="card-body cardBody"
                >
                  <p className="titleCard">{el.title}</p>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Card;
