import React from "react";

/**
 * @param {{ tags: string[]; }} props
 */
function Tags(props) {
  return (
    <>
      {props.tags.map((tag, index) => {
        return (
          <div className="tagList" key={index}>
            <p className="tag">{tag}</p>
          </div>
        );
      })}
    </>
  );
}

export default Tags;
