import React from 'react';
import '../Styles/OurBlog.css';
import ashLeavesAnime from '../assets/ashLeavesAnime 2.png';

const OurBlog = () => {
  return (
    <>
        <div class="titleContainer titleContainerDark">
            <h1>Lorem ipsum dolor sit</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e</p>
        </div>
        <div class="imageInfoContainer">
            <div class="blogImageContainer">
                <img src={ashLeavesAnime} alt="" />
            </div>
            <div class="blogInformationContainer">
                <p>The Pokemon Company has revealed a few of the cards in the Pokemon Trading Card Game's upcoming Pokemon Go expansion, featuring Pokemon and trainers that will be familiar to Pokemon Go players.
                    The three Pokemon Go team leaders--Valor's Candela, Mystic's Blanche, and Instinct's Spark--will receive Trainer Supporter cards, each one allowing the player to draw two cards and potentially recover an energy card from the discard pile. The three leaders will also each have standard and full-card art variants.
                    Some of the Pokemon featured in the card previews are Pikachu, Melmetal, Alolan Exeggutor, and more. Mewtwo is also shown to be the first V-Star Pokemon revealed for the new set, with a power that deals big damage to multiple Pokemon at a time.
                    The new Radiant mechanic from the upcoming Astral Radiance expansion in May is confirmed to return, featuring Pokemon so unique players can only have one Radiant Pokemon in a single deck. The Radiant Pokemon previewed is Eevee, with a power that allows the player to draw multiple cards depending on how many different Pokemon types they control in the field.</p>
            </div>
        </div>
    </>
  )
}

export default OurBlog