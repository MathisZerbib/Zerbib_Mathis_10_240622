import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import colors from "utils/style/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Accordion, Caroussel, Tags} from "components";
import { NotFound } from "pages";

import { Loader, LoaderContainer } from "utils/style/atom";
import { getLocationById } from "services/Api";

function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    getLocationById(id).then((res) => {
      setData(res);
      setDataLoading(false);
    });
  }, [id]);

  if ((data.length === 0 && !isDataLoading) || id.length !== 8) {
    return <NotFound></NotFound>;
  }
  // Do with { userId } what you need to load that user's data
  return (
    <>
      {isDataLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        data &&
        data.length > 0 &&
        data.map((el, index) => {
          let ratingStar = [];
          for (var i = 0; i < el.rating; i++) {
            ratingStar.push(i + 1);
          }
          while (ratingStar.length < 5) {
            ratingStar.push(0);
          }
          return (
            <div className="container-location" key={index}>
              <div className="cover-container coverContainer">
                <Caroussel slides={el.pictures} />
              </div>

              <div className="section-header-container sectionHeaderContainer">
                <div className="locTitleContainer">
                  <h2 className="locTitle">{el.title}</h2>
                  <p className="locSubtitle">{el.location}</p>
                  <div className="tagListContainer">
                    <Tags tags={el.tags}></Tags>
                  </div>
                </div>

                <div className="info-host infoHostContainer">
                  <div className="hostContainer">
                    <p className="hostName">{el.host.name}</p>
                    <img className="hostCover" src={el.host.picture} alt={el.host.name} />
                  </div>

                  <div className="ratingStar">
                    {ratingStar.map((el, i) => {
                      if (el >= 1) {
                        return (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            color={colors.primary}
                          />
                        );
                      } else {
                        return (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            color="#E3E3E3"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>

              <div className="accordion-container accordionContainer">
                <Accordion title="Description" content={el.description} />

                <Accordion title="Equipments" content={el.equipments} />
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default Location;
