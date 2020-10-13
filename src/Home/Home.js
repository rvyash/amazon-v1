import React from "react";
import "./Home.css";
import HomeImg from "./HomeImg.jpg";
import Product from "./Product/Product";

function Home() {
    return ( <
        div className = "home" >
        <
        div className = "home_container" >
        <
        img src = { HomeImg }
        alt = "logo"
        className = "home_img" / >
        <
        div className = "home_row" >
        <
        Product id = "01"
        title = "Gigabyte GeForce RTX 2080 Super Gaming OC 8G Graphics Card, , 8GB 256-Bit GDDR6"
        image = "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/nvidia-geforce-rtx-20-series-super-graphics-cards/nvidia-geforce-rtx-2080-super-photo-003.jpg"
        price = { 59999.75 }
        rating = { 5 }
        />{" "} <
        Product id = "02"
        title = "here is second one"
        image = "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/nvidia-geforce-rtx-20-series-super-graphics-cards/nvidia-geforce-rtx-20-series-super-graphics-cards-ogimage.jpg"
        price = { 30000 }
        rating = { 4 }
        />{" "} <
        Product id = "03"
        title = "Apple iPhone 11 Pro (64GB) - Space Grey"
        image = "data:image/jpeg;base64,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"
        price = { 85000 }
        rating = { 4 }
        />{" "} <
        /div>{" "} <
        div className = "home_row" >
        <
        Product id = "04"
        title = "Headphone"
        image = "https://specials-images.forbesimg.com/imageserve/5e8ce586748506000636107e/960x0.jpg?fit=scale"
        price = { 7000 }
        rating = { 3 }
        />{" "} <
        Product id = "05"
        title = "here is second onehere is second onehere is second onehere is second one here is second onehere is second onehere  "
        image = "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/nvidia-geforce-rtx-20-series-super-graphics-cards/nvidia-geforce-rtx-20-series-super-graphics-cards-ogimage.jpg"
        price = { 30000 }
        rating = { 4 }
        />{" "} <
        /div>{" "} <
        div className = "home_row" >
        <
        Product id = "06"
        title = "ADIDAS shoes"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDo-yWQywcA_sW0VZIF03WBuyzmWI_-6uLig&usqp=CAU"
        price = { 3700 }
        rating = { 3 }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Home;