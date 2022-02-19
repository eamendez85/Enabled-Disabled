import React,{useState, useEffect} from 'react'
import { Imagen } from '../UI/Imagen'
import Img1 from '../../assets/Imagenes/perro1.jpg'
import Img2 from '../../assets/Imagenes/perro2.jpg'
import { Boton } from '../UI/Boton'

export const Main = () => {

    const [cambio, setCambio]= useState(true)
    const cambioFiltro = () => {setCambio(!cambio)
    }

    useEffect(() => {
        const image1 = document.getElementById('img1')
        const image2 = document.getElementById('img2')
        const btn = document.getElementById('btn')
        if(cambio === true){
            image1.classList.add("imgFiltro")
            image2.classList.add("imgFiltro")
            btn.textContent="Disabled"
        }else{
            image1.classList.remove("imgFiltro")
            image2.classList.remove("imgFiltro")
            btn.textContent="Enabled"
        }
    },[cambio]);

  return (
    <main>
        <div className="card-container">
            <h2>Card 1</h2>
            <Imagen url={Img1} iden="img1" ></Imagen>
        </div>
        <div className="card-container">
            <h2>Card 2</h2>
            <Imagen url={Img2} iden="img2" ></Imagen>
        </div>
        <Boton text="dasd" event={cambioFiltro}></Boton>
    </main>
  )
}
