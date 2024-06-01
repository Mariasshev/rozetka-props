import React from 'react';

const ListItem = props => <li><a href='#'>{props.value}</a></li>;


export function Category(props) {

  return (
    <div className="col-6 col-md-4 col-lg-2 border-right">
      <img src={props.image} alt={props.name} />
      <h6 className={`pt-2 ${Array.isArray(props.description) ? '' : 'text-center'}`}><a href='#'>{props.name}</a></h6>
      <ul>
        {Array.isArray(props.description) ? 
          props.description.map((item, index) => <ListItem key={index} value={item} />) : 
          <ListItem />}
      </ul>
    </div>
  );
}
