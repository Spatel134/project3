import React from 'react';
import Sidenav from '../../components/Sidenav';
import image from '../../assets/images/community-fridge.jfif'
const Home = () => {
    return (
        <>
            <Sidenav title="Community Fridge" />

            <div class="section white">
                <div class="row container">
                    <h2 class="Sidenav">What is a community fridge?</h2>
                    <p class="grey-text text-darken-3 lighten-3">A community fridge is a refrigerator that is placed in a public space to enable food to be shared, at no cost, within a community.</p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={image} />
                </div>
                <div style={{ position: "absolute", top: "30%", left: "30%" }}>
                    <a class="waves-effect waves-light btn">button</a>
                </div>
            </div>



        </>
    );
};

export default Home;