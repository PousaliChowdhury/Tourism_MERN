import React from "react";
 
const FilterCard = ({ item }) => {            
           // destructuring props
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-3 col-sm-4 card m-3 p-3 border-5"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="photo w-75" style={{height:'200px',width:'150px'}} />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4" style={{color:'darkblue' ,cursor:"pointer"}}>
                    {Val.title}
                  </div>
                  <div className="card-text" style={{color:'darkblue',cursor:"pointer"}}>{Val.desc1}</div>
                  <div className="card-text" style={{color:'darkblue',cursor:"pointer"}}>{Val.desc2}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default FilterCard;
