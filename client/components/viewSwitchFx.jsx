import React from 'react';

function NextArrow(props) {
  return (
    <div className=" ar next-arrow"
      style={{ textDecoration: 'none', height: 'fit-content' }}
      onClick={() => {
        props.goToNextProj();
      }}>
      <h1 className="fa fa-angle-right fa-3x" aria-hidden="true"></h1>
    </div>
  );
}

function BackArrow(props) {
  return (
    <div className=" ar back-arrow"
      style={{ textDecoration: 'none', height: 'fit-content' }}
      onClick={() => {
        props.goToPrevProj();
      }}>
      <h1 className="fa fa-angle-left fa-3x" aria-hidden="true"></h1>
    </div>
  );
}

function getTechnologies(project) {
    return project.map((technology, index) => {
      return <span key={index}
        className="badge custom-badge my-1 ml-0 mr-2">{technology}</span>;
    });
  }

function Rec(props) {
  return (
    <div className={
      props.index === props.activeIndex
        ? 'd-flex justify-content-center align-items-center col-12'
        : 'd-none'
    }
    key={props.index}>
        <div className='recs d-flex justify-content-evenly' key={props.proj.id}>
            <img
            className="projImg p-0"
            src={props.proj.image}
            alt={`${props.proj.name} poster`}
            />
            <div className='d-flex flex-column align-content-center justify-content-center m-5 recInfo'>
                <h4 className='mt-3'>{props.proj.name}</h4>
                <h6 className='mb-3 pr-2'>{props.proj.description}</h6>
                <h4 className='mt-3 mb-3 pr-2'>Developed Using</h4>
                <div className='d-flex flex-wrap'>
                    {getTechnologies(props.proj.techArr)}
                </div>
            </div>
        </div>
    </div>
  );
}



export { NextArrow, BackArrow, Rec };