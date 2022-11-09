import React from 'react';

import './page-header.scss';

import bg1 from '../../assets/samuel-regan-asante-unsplash.jpg';

const PageHeader = props => {
  return (
    <div className="page-header" style={{backgroundImage: `url(${bg1})`}}>
        <h2>{props.children}</h2>
    </div>
  );
}


export default PageHeader;