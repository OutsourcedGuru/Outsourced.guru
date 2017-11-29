import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  let source = './' + props.source;

  return (
    <img className="gallery" src={source} alt="" />
  );
};

export default Image;
