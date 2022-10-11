import React from "react";
import Cards from "./Cards";
import data from "./data.js";
import Navbar from "./Navbar";

export default function App() {
  const cardElements = data.map((card) => {
    return (
      <Cards
        image={card.imageUrl}
        location={card.location}
        view={card.googleMapsUrl}
        name={card.title}
        start={card.startDate}
        end={card.endDate}
        description={card.description}
      />
    );
  });

  return (
    <div className="main-container">
      <Navbar />
      {cardElements}
      <h4 className="footer">Made with ❤️ by Sujal Samai.</h4>
    </div>
  );
}
