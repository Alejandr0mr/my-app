import React from 'react'
import Header from './header/Header';
import CardList from './body/CardList';
import Footer from './footer/Footer';
import Slider from './slider/slider';

function Inicio() {
    return (
        <div>
            <Header/>
            <Slider/>
            <CardList/>
            <Footer/>
        </div>
    )
}

export default Inicio