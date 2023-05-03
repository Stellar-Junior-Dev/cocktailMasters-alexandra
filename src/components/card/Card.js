import "./card.css";
import heart from '../../img/heart.svg';
import heartfiller from '../../img/heart-filler.svg';

export function Card(){
    return(
        <div class="card">
            <div class="heart-container">
            <img class = "heart" src={heart}></img>
            </div>
            <div class="drink">
                <h1>MOJITO</h1>
            </div>
        </div>
    );
}