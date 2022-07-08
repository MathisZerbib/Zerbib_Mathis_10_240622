import React from "react";
import styled from "styled-components";
import Thumbnail from "../../assets/thumbnail.png";
import { getLocations } from "services/Api";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #F6F6F6;
    border-radius: 25px;
    width: 90%;
    max-width: 1200px;
    margin: 40px auto;
`;
const CardBody = styled.div`
    margin:30px;
    border-radius: 10px;
    position: relative;
    height: 340px;
    width: 340px;
    // background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%), url(${Thumbnail});
    background-repeat: no-repeat;
    background-size: cover;

`;
const TitleCard = styled.p`
  font-size: 1rem;
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 25px;
  right: 25px;
  line-height: 25px;
`;

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getLocations().then(res => setData(res.data))
    },[]);
  return (
    <>
      <CardContainer>
        { data && data.length>0 && data.map((el, i) => {
          return (
            <Link  key={i} to={{ pathname: "/location/"+ el.id }}>
            <CardBody  style={{
          backgroundImage: `url(${el.cover})`
        }} >
              <TitleCard>{el.title}</TitleCard>
            </CardBody>
            </Link>
          );
        })}
      </CardContainer>
    </>
  );
}

export default Card;

//   return (
//     <>
//       <main>
//         <CardContainer>
//                 <TitleCard>{props.title}</TitleCard>
//         </CardContainer>
//       </main>
//     </>
//   );

// return result.map((el, i) => {
//     return (
// //         <CardContainer key={i}>
// //             <TitleCard>{el.title}</TitleCard>
// //             <ImageCard>
// //                 <img src={el.cover} alt=""/>
// //             </ImageCard>
// //             <DescriptionCard>
// //                 <p>{el.description}</p>
// //             </DescriptionCard>
// //             <HostCard>
// //                 <p>{el.host.name}</p>
// //                 <img src={el.host.picture} alt=""/>
// //             </HostCard>
// //             <RatingCard>
// //                 <p>{el.rating}</p>
// //             </RatingCard>
// //             <LocationCard>
// //                 <p>{el.location}</p>
// //             </LocationCard>
// //             <EquipmentsCard>
// //                 <p>{el.equipments}</p>
// //             </EquipmentsCard>
// //             <TagsCard>
// //                 <p>{el.tags}</p>
// //             </TagsCard>
// //         </CardContainer>
// //     )
// // }

//                 <CardBody key={i}>
//                         <TitleCard>{el.title}</TitleCard>
//                 </CardBody>

//           );
//   });
