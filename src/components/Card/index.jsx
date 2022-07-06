import React from "react";
import styled from "styled-components";
import Thumbnail from "../../assets/thumbnail.png";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background: #F6F6F6;
    border-radius: 30px;
    width: 90%;
    max-width: 1200px;
    margin: 40px auto;
`;
const CardBody = styled.div`
    margin:30px 0;
    border-radius: 10px;
    position: relative;
    height: 340px;
    width: 340px;
    background-image: url(${Thumbnail});
    background-repeat: no-repeat;
`;

// const ThumbnailImage = styled.img`
//     width: 300px;
//     height: 300px;
//     object-fit: cover;
//     `;

const TitleCard = styled.p`
  font-size: 1rem;
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 25px;
  width: 80px;
  line-height: 25px;
`;

function Card() {
  const result = [
    {
      id: "c67ab8a7",
      title: "Appartement cosy",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
      ],
      description:
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
      host: {
        name: "Nathalie Jean",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 17e",
      equipments: [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI",
      ],
      tags: ["Batignolle", "Montmartre"],
    },
    {
      id: "b9123946",
      title: "Magnifique appartement proche Canal Saint Martin",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg",
      ],
      description:
        "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
      host: {
        name: "Della Case",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 10e",
      equipments: [
        "Parking",
        "Sèche Cheveux",
        "Machine à laver",
        "Wi-fi",
        "Cuisine équipée",
        "Télévision",
      ],
      tags: ["Canal Saint Martin", "République", "Appartement"],
    },
    {
      id: "46d188c5",
      title: "Studio de charme - Buttes Chaumont",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg",
      ],
      description:
        "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
      host: {
        name: "Franck Maher",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 20e",
      equipments: ["Wi-fi", "Cuisine équipée", "Télévision", "Sèche Cheveux"],
      tags: ["Buttes Chaumont", "Laumière", "Studio"],
    },
    {
      id: "7af00cd6",
      title: "Nid douillet au coeur du 11ème",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg",
      ],
      description:
        "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
      host: {
        name: "Della Case",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 11e",
      equipments: [
        "Micro-Ondes",
        "Wi-fi",
        "Chambre Séparée",
        "Climatisation",
        "Télévision",
      ],
      tags: ["Parmentier", "Marais", "Parc", "Night Life"],
    },
  ];

  return (
    <>
      <CardContainer>
        {result.map((el, i) => {
          return (
            <CardBody key={i}>
              <TitleCard>{el.title}</TitleCard>
            </CardBody>
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
