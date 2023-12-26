import React from "react";
import "./Page2.css";
import Container from "./Container";
import photo1 from "./photosss/photo1.png";
import photo2 from "./photosss/photo2.png";
import photo3 from "./photosss/photo3.png";
import photo4 from "./photosss/photo4.png";
import photo5 from "./photosss/photo5.png";
import photo6 from "./photosss/photo6.png";
import photo7 from "./photosss/photo7.png";
import photo8 from "./photosss/photo8.png";
import photo9 from "./photosss/ninth.png";
import photo10 from "./photosss/tenth.png";
import photo11 from "./photosss/eleventh.png";
import photo12 from "./photosss/twelve.png";
import photo13 from "./photosss/thirteen.png";
import photo14 from "./photosss/fourteen.png";
import photo15 from "./photosss/fiftheen.png";
import photo16 from "./photosss/sixtheen.png";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div div className="pageee">
      <div className="page2 tbdr">
        <div className="page2a tbdr">
          <p> Product Dhoop Jarcans</p>
        </div>
        <div className="page2b tbdr">
          <div>price</div>
          <div>category</div>
        </div>

        <div className="page2c ">
          <Container
            srcimg={photo1}
            title="DHOOP INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$2.05"
          />
          <Container
            srcimg={photo2}
            title="HEM Incense"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$1.05"
          />
          <Container
            srcimg={photo3}
            title="Mystic Temple Incense"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="Mystic Temple Incense"
          />
          <Container
            srcimg={photo4}
            title="SAC Incense"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$5.05"
          />
        </div>

        <div className="page2c ">
          <Container
            srcimg={photo5}
            title="Frankincense and Myrrh"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$3.05"
          />

          <Container
            srcimg={photo6}
            title="Eucalyptus INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$10.05"
          ></Container>

          <Link to="/page2">
            <Container
              srcimg={photo7}
              title="Lavender INCENSE CONES"
              discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
              rating="3.5"
              price="$4.05"
            ></Container>
          </Link>
          <Container
            srcimg={photo8}
            title="Sage INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$0.75"
          ></Container>
        </div>

        <div className="page2c">
          <Container
            srcimg={photo9}
            title="Frankincense and Myrrh"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$3.05"
          ></Container>
          <Container
            srcimg={photo10}
            title="Eucalyptus INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$10.05"
          ></Container>
          <Container
            srcimg={photo11}
            title="Orange Blossom INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$4.05"
          ></Container>
          <Container
            srcimg={photo12}
            title="Musk INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$0.75"
          ></Container>
        </div>
        {/* <Container
        srcimg={photo13}
          title="Musk INCENSE CONES"
          discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
          rating="3.5"
          price="$0.75"
        ></Container> */}

        <div className="page2c ">
          <Container
            srcimg={photo13}
            title="Bergamot and Myrrh"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$3.05"
          ></Container>
          <Container
            srcimg={photo14}
            title="Gardenia INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$10.05"
          ></Container>
          <Container
            srcimg={photo15}
            title="Yerba Santa INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$4.05"
          ></Container>
          <Container
            srcimg={photo16}
            title="Sage INCENSE CONES"
            discription="4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use"
            rating="3.5"
            price="$0.75"
          ></Container>
        </div>

        <div className="pagination tbdr">
          <a href="/">1</a>
          <a href="/">2</a>
          <a href="/">3</a>
          <a href="/">4</a>
          <a href="/"> Next</a>
        </div>
      </div>
    </div>
  );
};

export default Page2;
