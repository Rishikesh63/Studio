import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import Navbar from "../../components/Navbar/Navbar";

const Home = ()=>{
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductBanner/>
        </div>
    )
}

export default Home;