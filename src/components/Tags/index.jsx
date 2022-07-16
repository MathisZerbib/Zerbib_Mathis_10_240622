import styled from "styled-components";
import React from "react";
import colors from "utils/style/colors";

const TagList = styled.div`
padding: 5px 0px;
margin: 5px 10px 0px 0px;
border-radius: 10px;
background-color: ${colors.primary};
color: #fff;
`;


const Tag = styled.p`
margin:0  5px;
flex: 0 0 33.333333%;

`;
/**
 * @param {{ tags: string[]; }} props
 */
function Tags(props) {
  return (
    <>
      {props.tags.map((tag, index) => {
        return (
          <TagList key={index}>
            <Tag>{tag}</Tag>
          </TagList>
        );
      })}
    </>
  );
}

export default Tags;
