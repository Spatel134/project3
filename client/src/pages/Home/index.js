import React from 'react';
import Header from '../../components/Header/Header';
import image from '../../assets/images/community-fridge.jfif';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <Header title="Community Fridge" />

            <div class="section white">
                <div class="row container">
                    <h2 class="header">What is a community fridge?</h2>
                    <p class="grey-text text-darken-3 lighten-3">A community fridge is a refrigerator that is placed in a public space to enable food to be shared, at no cost, within a community.</p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={image} />
                </div>
                <div style={{ position: "absolute", top: "30%", left: "20%" }}>
                    <h1 style={{ color: "white" }}>Click Here to View The Location of The Fridges</h1>
                    <Link to="/locations" class="waves-effect waves-dark btn-large">View Fridges</Link>
                </div>
            </div>



        </>
    );
};

export default Home;