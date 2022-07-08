import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLocationById } from "services/Api";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import colors from "utils/style/colors";

const CoverContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1240px;
`;

const CoverImage = styled.img`
  opacity: 0.7;
  width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: center;
`;

const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  place-content: space-around;
`;

const LocTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  place-content: space-around;
`;

const LocTitle = styled.h2`
font-size: 	2.25rem;
color: #FF6060;
margin-bottom: 0;
`;

const LocSubTitle = styled.p`
font-size: 	1.125rem;
color: #FF6060;
margin-top: 0;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HostName = styled.p`
width: 5rem;
font-size: 	1.125rem;
color: #FF6060;
margin-top: 0;
`;

const HostCover = styled.img`
height: 65px;
border-radius: 65px;
margin-block-end: 1em;
`;

function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocationById(id).then((res) => setData(res));
  }, [id]);
  // console.log("Data From Location", data);
  
  // do with `userId` what you need to load that user's data
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((el, index) => {
          let ratingStar = []
          for (var i=0; i < el.rating; i++) {
            ratingStar.push(i+1);
          }
          while(ratingStar.length < 5) {
            ratingStar.push(0);
          }
          console.log(el.rating, ratingStar);

          return (
            <div key={index}>
              <CoverContainer>
                {/* TODO Build a caroussel instead */}
                <CoverImage src={el.cover}></CoverImage>
              </CoverContainer>

              <SectionHeaderContainer>
                <LocTitleContainer>
                  <LocTitle>{el.title}</LocTitle>
                  <LocSubTitle>{el.location}</LocSubTitle>
                  <p>{el.tags}</p>
                </LocTitleContainer>

                <div>
                  <HostContainer>
                  <HostName>{el.host.name}</HostName>
                  <HostCover src={el.host.picture}></HostCover>
                  </HostContainer>
                  {
                  ratingStar.map((el, i) => {
                    if (el >= 1) {
                      return (
                        <FontAwesomeIcon key={i} icon={faStar} color={colors.primary} />
                      );
                    } else {
                      return (
                        <FontAwesomeIcon key={i} icon={faStar} color="#E3E3E3" />
                      );
                    }
                  })}
                </div>
              </SectionHeaderContainer>

              <p>Description</p>
              <p>{el.description}</p>
              <p>{el.equipments}</p>
            </div>
          );
        })}
    </>
  );
}

export default Location;
