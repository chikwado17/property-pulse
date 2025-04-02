import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            title="For Renters"
            cardBg="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              href: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            InfoBox
            title="For Property Owners"
            cardBg="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              href: "/properties/add",
              backgroundColor: "bg-blue-700",
            }}
          >
            List your property for rent. Get verified tenants and earn money.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
