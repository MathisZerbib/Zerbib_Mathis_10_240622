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
import { Loader } from "utils/style/atom";
import Caroussel from "components/Caroussel";

const CoverContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1200px;
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
  font-size: 2.25rem;
  color: #ff6060;
  margin-bottom: 0;
`;

const LocSubTitle = styled.p`
  font-size: 1.125rem;
  color: #ff6060;
  margin-top: 0;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const HostName = styled.p`
  width: 5rem;
  font-size: 1.125rem;
  color: #ff6060;
  margin: 20px;
`;

const HostCover = styled.img`
  height: 65px;
  border-radius: 65px;
  margin: 20px;
`;

const TagListContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
`;

const AccordionContainer = styled.div`
margin: 2rem auto;
display:flex;
`;

function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    getLocationById(id).then((res) => {
      console.log('res', res.lenght)

      setData(res)
      setDataLoading(false)      
    });

    
  }, [id]);


  if(data.length === 0) {
    return (<NotFound></NotFound>)
  }


  console.log("Data From Location", data[0], id.length);

  // do with `userId` what you need to load that user's data
  return (
    <> 
      {isDataLoading ? (
        <Loader />
      ) :data &&
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
            <div key={index}>
              <CoverContainer>
                <Caroussel slides={el.pictures} />
              </CoverContainer>

              <SectionHeaderContainer>
                <LocTitleContainer>
                  <LocTitle>{el.title}</LocTitle>
                  <LocSubTitle>{el.location}</LocSubTitle>
                  <TagListContainer>
                    <Tags tags={el.tags}></Tags>
                  </TagListContainer>
                </LocTitleContainer>

                <div>
                  <HostContainer>
                    <HostName>{el.host.name}</HostName>
                    <HostCover src={el.host.picture}></HostCover>
                  </HostContainer>
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
              </SectionHeaderContainer>

                <AccordionContainer>
                  
                  <Accordion title="Description" content={el.description} />
                  
                  <Accordion title="Equipments" content={el.equipments} />
                
              </AccordionContainer>
            </div>
          );
        })}
    </>
  );
}

export default Location;
