import React from 'react';

function NextArrow(props) {
  return (
    <div className=" ar next-arrow"
      style={{ textDecoration: 'none', height: 'fit-content' }}
      onClick={() => {
        props.goToNextProj();
      }}>
      <h1 className="fa fa-angle-right fa-3x" id='arrow' aria-hidden="true"></h1>
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
      <h1 className="fa fa-angle-left fa-3x" id='arrow' aria-hidden="true"></h1>
    </div>
  );
}

function getTechnologies(project) {
    return project.map((technology, index) => {
      return <span key={index}
        className="badge custom-badge my-1 ml-0 mr-2" id='tech'>{technology}</span>;
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
        <div className='recs fade-in' key={props.proj.id}>
            <div className=' '>
                <img
                className="projImg p-0"
                src={props.proj.image}
                alt={`${props.proj.name} poster`}
                />
                <div className='d-flex align-content-center justify-content-between'>
                    <div className='m-4'>
                        
                    </div>
                    <div className='d-flex flex-row justify-content-end'>
                        <BackArrow className='col-1 ar m-4' goToPrevProj={() => props.goToPrevProj()}/>
                        <NextArrow className='col-1 ar m-4' goToNextProj={() => props.goToNextProj()}/>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column align-content-center justify-content-center recInfo'>
                <h4 className='mt-3'>{props.proj.name}</h4>
                <h6 className='mb-3 pr-2'>{props.proj.longDescription}</h6>
                <h4 className='mt-3 mb-3 pr-2'>Developed Using</h4>
                <div className='d-flex flex-wrap'>
                    {getTechnologies(props.proj.techArr)}
                </div>
                <div>
                    <div className='linkCont'>
                        <a className='link' href={props.proj.github}>
                            <span className='fab fa-github'></span> Github
                        </a>
                        <div className=''>|</div>
                        <a className='link' href={props.proj.live}>
                            <span className='far fa-window-restore'></span> Live
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}



export { NextArrow, BackArrow, Rec };