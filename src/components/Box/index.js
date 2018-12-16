import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Box = (props) => {
    return (
      <div className={ 'small-box ' + props.theme }>
        <div className="inner">
          <h3 id={ props.id }>{props.count}</h3>

          <p>{props.name}</p>
        </div>
        <div className="icon">
          <i className={props.icon}></i>
        </div>
        <a href={`${props.main_url}${props.url}`} className="small-box-footer">
            {props.desp} <i className="fa fa-arrow-circle-right"></i>
        </a>
      </div>
    );
}


export default Box;

