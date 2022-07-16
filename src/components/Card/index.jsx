import React from "react";
import styled from "styled-components";
import { getLocations } from "services/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, LoaderContainer } from "utils/style/atom";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  border-radius: 25px;
  width: 77rem;
  max-width: 90%;
`;
const CardBody = styled.div`
  border-radius: 10px;
  position: relative;
  height: 380px;
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
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    getLocations().then((res) => {
      setData(res.data);
      setDataLoading(false);
    });
  }, []);

  const pathName = window.location.pathname
  console.log("pathname", pathName)

  return (
    <>
      <CardContainer>
        {isDataLoading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          data &&
          data.length > 0 &&
          data.map((el, i) => {
            return (
              <Link key={i} to={{ pathname: pathName + "location/" + el.id }}>
                <CardBody
                  style={{
                    backgroundImage: `url(${el.cover})`,
                  }}
                  className="card-body"
                >
                  <TitleCard>{el.title}</TitleCard>
                </CardBody>
              </Link>
            );
          })
        )}
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
