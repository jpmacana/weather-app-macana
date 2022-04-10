import React from "react";
import CardTemp from "./CardTemp"
import PropTypes from 'prop-types';
import styles from './Card.module.css'
import { GoX } from "react-icons/go"
import icon_09d from "../assets/09d.png"
import icon_03n from "../assets/03n.png"
import icon_01d from "../assets/01d.png"
import icon_13d from '../assets/13d.png'


export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código

  //!Verificamos que onClose sea una funcion
  function handleOnClose() {
    if (typeof onClose === "function") return onClose();
  }

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}><GoX/></button>
      <span className={styles.cityName}>{name}</span>
      <CardTemp label="Max: " value={max}/>
      <CardTemp label="Min: " value={min}/>
      <WeatherIcon icon={img}     />
    </div>
  );

  function WeatherIcon ({icon}){

    switch (icon) {
      case "03n" : return <img src={icon_03n} alt="cloudy"/>     
      case "01d" : return <img src={icon_01d} alt="clear sky"/>     
      case "13d" : return <img src={icon_13d} alt="snow"/>    
      
      default: return <img src={icon_09d} alt="shower rain"/>
    }

  }



}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,



}