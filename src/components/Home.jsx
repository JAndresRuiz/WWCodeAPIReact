import React from "react";
import "../Styles/Home.css";
import ashLeavesAnime from "../assets/ashLeavesAnime.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <main className="mainContainer">
      <div className="homeContainer">
        <div className="descriptionContainer descriptionContainerDark">
          <p className="p">Discover the treasures awaiting for you...</p>
          <h1 className="h1">Pokemon Action Figures, Toys and cards</h1>
          <p className="information">
            Pokémon is a media franchise owned by video game giant Nintendo and
            created by Satoshi Tajiri around 1995. Originally released as a pair
            of interlinkable Game Boy role-playing video games, Pokémon has
            since become the 2nd most successful and lucrative video game-based
            media franchise in the world, behind only Nintendo's Mario series.
          </p>
          <ul className="cardsBlogContent cardsBlogContentDark">
            <li>
              <a className="aLinks" onClick={() => navigate("ourblog")}>
                Go to our blog
              </a>
            </li>
            <li>
              <a className="aLinks" onClick={() => navigate("buycards")}>
                Buy cards
              </a>
            </li>
          </ul>
        </div>
        <div className="imageContainer">
          <img src={ashLeavesAnime} />
        </div>
      </div>
    </main>
  );
};

export default Home;
