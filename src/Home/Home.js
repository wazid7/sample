import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FooterSection from '../Footer/FooterSection';
import HeaderSection from '../Header/HeaderSection';
import NavSelf from '../Navbar/NavSelf';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavSelf></NavSelf>
            <HeaderSection></HeaderSection>
            <ChooseUs></ChooseUs>
            <Services></Services>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;