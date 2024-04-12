import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Residential = ({ residential }) => {  
    const {facilities} = residential;
  return (
    <div>
        
      <div className="card w-full  h-full bg-base-100 shadow-xl border-2">
        <figure className="rounded-xl bg-gray-300 m-5">
          <img src={residential.image} alt="Shoes" className="w-[100%] h-full rounded-xl" />
        </figure>
        <div className="ml-6"> 
            
            {facilities.map((facility, idx) => (            
            <button key={idx} className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4">{facility}</button>           
            ))}
           
        </div>
        <div className="card-body text-left">
          <h2 className="card-title font-playfair-display text-2xl">{residential.estate_title}</h2>
          <p className="">Type: {residential.segment_name}</p> 
          <p className="">Status: <span className="font-bold">{residential.status}</span></p>  
          <hr className="my-6 border-t-2 border-dashed"></hr>     
          <div className="">
            <div>
            <NavLink to={`/residential/${residential.id}`}>  <button className="btn btn-primary w-full">View Property</button>  </NavLink>         
            </div>           
        </div>
        </div>
        
      </div>
      
    </div>
  );
};
Residential.propTypes = {
    residential: PropTypes.object,
};
export default Residential;