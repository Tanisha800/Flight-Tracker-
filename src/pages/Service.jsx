import React from "react";

import FAQsection from "../components/FAQsection/FAQsection";
import Tracker from "../components/Tracker/Tracker";
import Route from "../components/Route/Route";
import Services from "../components/services/Services";

function Service() {
  return (
    <div>
      <Services />
      <Tracker />
      <Route />
      <FAQsection />
    </div>
  );
}

export default Service;
