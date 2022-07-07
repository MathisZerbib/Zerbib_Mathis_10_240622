import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationById } from 'services/Api';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
  `
  
function Location() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocationById(id).then(res => setData(res))
  },[id]);
  console.log("Data From Location",data)
  // do with `userId` what you need to load that user's data
  return (
    <>
            { data && data.length>0 && data.map((el, i) => {
          return (
            <div key={i}>
              <CoverContainer>
                <CoverImage src={el.cover}></CoverImage>
              </CoverContainer>
              <p>{el.title}</p>
              <p>{el.location}</p>

              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <FontAwesomeIcon icon={faStar} size="1x" />
              <p>{el.rating}</p>
              <p>{el.host.name}</p>
              <p>{el.tags}</p>
              <p>Description</p>
              <p>{el.description}</p>
              <p>{el.equipments}</p>

            </div>
          );
        })}
    </>
  );
}

  export default Location
