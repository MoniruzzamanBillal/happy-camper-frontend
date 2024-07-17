const MapContainer = () => {
  return (
    <div className="MapContainerContainer  ">
      <div className="mapContent  w-full ">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5962553195977!2d90.39590567479559!3d23.868466584234476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c421c0fc081d%3A0x5e3b7e7600f40412!2sRobotics%20Bangladesh%20(RoboticsBD)!5e0!3m2!1sen!2sbd!4v1721237126253!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapContainer;
