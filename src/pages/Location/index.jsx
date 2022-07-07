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

function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocationById(id).then((res) => setData(res));
  }, [id]);
  console.log("Data From Location", data);
  if (data && data.length > 0) {
    const intRating = parseInt(data[0].rating);
    console.log("intRating", intRating);
  }

  // do with `userId` what you need to load that user's data
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return (
            <div key={i}>
              <CoverContainer>
                <CoverImage src={el.cover}></CoverImage>
              </CoverContainer>

              <SectionHeaderContainer>
                <LocTitleContainer>
                  <p>{el.title}</p>
                  <p>{el.location}</p>
                  <p>{el.tags}</p>
                </LocTitleContainer>

                <div>
                <p>{el.host.name}</p>

                  {["1", "1", "1", "0", "0"].map((el, i) => { 
                    if (el === "1") {
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
