import styled from "styled-components";
import React from "react";
import colors from "utils/style/colors";

const TagList = styled.div`
font-size: 0.875rem;
padding: 0 20px;
margin-right: 5px;
border-radius: 10px;
line-height: 0;
    background-color: ${colors.primary};
    color: #fff;
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
            <p>{tag}</p>
          </TagList>
        );
      })}
    </>
  );
}

export default Tags;
