import React from "react";
import Card from "./Card";
import Styles from "./Cards.module.css"

export default function Cards({ cities,onRemove }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={Styles.cards}>
      {cities.map((city) => (
        <Card
          key={city.id} //! Todo componente que use map, debe tener como primer propiedad, el key.
          min={city.min}
          max={city.max}
          name={city.name}
          img={city.img}
          onClose={() => onRemove(city.id)}
        />
      ))}
    </div>
  );
}
