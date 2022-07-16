import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocationById } from "services/Api";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import colors from "utils/style/colors";
import Tags from "components/Tags";
import Accordion from "components/Accordion";
import NotFound from "pages/NotFound";
import { Loader, LoaderContainer } from "utils/style/atom";
import Caroussel from "components/Caroussel";

const CoverContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;
const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: baseline;
  place-content: space-between;
`;

const LocTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocTitle = styled.h2`
  font-size: 2.25rem;
  color: #ff6060;
  margin-bottom: 5px;
  font-weight: 400;
  text-align: left;
`;

const LocSubTitle = styled.p`
  font-size: 1.125rem;
  color: #ff6060;
  margin-top: 0;
  text-align: left;
  margin-bottom: 10px;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HostName = styled.p`
  width: 5rem;
  font-size: 1.125rem;
  color: #ff6060;
  margin: 0;
`;

const HostCover = styled.img`
  height: 65px;
  border-radius: 65px;
  margin: 0;
`;

const TagListContainer = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
`;

const AccordionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 300px;
`;

const RatingStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const InfoHostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;
function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    getLocationById(id).then((res) => {
      console.log("res", res.lenght);

      setData(res);
      setDataLoading(false);
    });
  }, [id]);

  if ((data.length === 0 && !isDataLoading) || id.length !== 8) {
    return <NotFound></NotFound>;
  }

  console.log("Data From Location", data[0], id.length);

  // do with `userId` what you need to load that user's data
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
          console.log(el.rating, ratingStar);

          return (
            <div className="container-location" key={index}>
              <CoverContainer className="cover-container">
                <Caroussel slides={el.pictures} />
              </CoverContainer>

              <SectionHeaderContainer className="section-header-container">
                <LocTitleContainer>
                  <LocTitle>{el.title}</LocTitle>
                  <LocSubTitle>{el.location}</LocSubTitle>
                  <TagListContainer>
                    <Tags tags={el.tags}></Tags>
                  </TagListContainer>
                </LocTitleContainer>

                <InfoHostContainer className="info-host">
                  <HostContainer>
                    <HostName>{el.host.name}</HostName>
                    <HostCover src={el.host.picture}></HostCover>
                  </HostContainer>

                  <RatingStar>
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
                  </RatingStar>
                </InfoHostContainer>
              </SectionHeaderContainer>

              <AccordionContainer className="accordion-container">
                <Accordion title="Description" content={el.description} />

                <Accordion title="Equipments" content={el.equipments} />
              </AccordionContainer>
            </div>
          );
        })
      )}
    </>
  );
}

export default Location;
