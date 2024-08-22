import React from "react";
import "./Service_sec_1.css";

function Service_sec_1({service}) {
  return (
    <section className="section1_service_banner">
      <div className="serve_sec_bar_cont">
        <div className="service_sec_1_bar" />
        <h1>{service.para1}</h1>
      </div>
    </section>
  );
}

export default Service_sec_1;
