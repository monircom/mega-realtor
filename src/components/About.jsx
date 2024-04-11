import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const About = () => {
  const position = [23.864583, 90.380333];
  return (
    <div>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">About Mega Realtor</h1>
      </div>

      <div className="flex justify-center items-center mt-10 p-5 ">
        <p className="text-center max-w-[550px]">
          Mega Realtor stands tall as a premier real estate agency, renowned for
          its unparalleled commitment to excellence and customer satisfaction.
          With a seasoned team of dedicated professionals, Mega Realtor
          navigates the intricate landscape of buying, selling, and renting
          properties with finesse. Their comprehensive approach ensures that
          clients receive tailored solutions that perfectly match their needs
          and aspirations. Whether it's finding the ideal family home, securing
          lucrative investment properties, or facilitating seamless
          transactions, Mega Realtor's expertise and integrity shine through at
          every step of the process. Their stellar reputation and track record
          of success make them the go-to choice for those seeking top-tier real
          estate services.
        </p>
      </div>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Location</h1>
      </div>
      <div>
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          style={{ minHeight: "50vh", minWidth: "65vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Mega Realtor
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default About;
