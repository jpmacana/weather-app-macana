import styles from "./CardTemp.module.css"

//! Creamos un componente temporal que se va ir repitiendo cada vez que creamos una card.

function CardTemp({ label, value }) {
  return (
    <div className={styles.cardTemp}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );
}


export default CardTemp