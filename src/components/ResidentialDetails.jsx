import { useLoaderData, useParams } from "react-router-dom";

const ResidentialDetails = () => {
    const residentials = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const residential = residentials.find((residential) => residential.id === idInt);
    const {facilities} = residential;
    console.log(residential);

    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl ">
          <figure className="rounded-xl bg-[rgba(19,19,19,0.05)] p-16">
            <img src={residential.image} alt="Album" className="rounded-xl w-[425px]" />
          </figure>
          <div className="card-body lg:w-1/2">
            <h1 className="font-playfair-display text-5xl mb-4">
              {residential.estate_title}{" "}
            </h1>
            <h1 className="text-xl">Type: {residential.segment_name} </h1>
            <hr className="border-t-2 border-solid"></hr>
            <h1>{residential.category}</h1>
            <hr className="border-t-2 border-solid mb-6"></hr>
            <h1 className="mb-6">
              <span className="font-bold">Description: </span> {residential.description}
            </h1>
            <div className="flex gap-5">
              <h1 className="font-bold">Facilities</h1>
              {facilities.map((facility, idx) => (
                <button
                  key={idx}
                  className="bg-[rgba(35,190,10,0.05)] text-[#23BE0A] mr-4"
                >
                  #{facility}
                </button>
              ))}
            </div>
            <hr className="border-t-2 border-solid my-6"></hr>
            <div className="">
              <table className="table">
                <tbody>
                  <tr className="border-none ">
                    <td className="lg:w-[250px]">Price:</td>
                    <td className="font-bold">{residential.price}</td>
                  </tr>
                  <tr className="border-none">
                    <td>Status:</td>
                    <td className="font-bold">{residential.status}</td>
                  </tr>
  
                  <tr className="border-none">
                    <td>Area:</td>
                    <td className="font-bold">{residential.area}</td>
                  </tr>
                  <tr className="border-none">
                    <td>Location:</td>
                    <td className="font-bold">{residential.location}</td>
                  </tr>
                </tbody>
              </table>
            </div>              
          </div>
        </div>        
      </div>
    );
};

export default ResidentialDetails;