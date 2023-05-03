import "./options.css";
import x from "../../img/x.svg"
import copyright from "../../img/copyright.svg"
export function Options(){
    return(


            <div class="background">
                <div class="overlay">
                <div class="close">
                    <img src={x}></img>
                </div>
                <div class="opt">
                <h1>HOME</h1>
                <h1>FAVOURITES</h1>
                <h1>POPULAR DRINKS</h1>
                <h1>LATEST DRINKS</h1>
                <h1>RANDOM DRINKS</h1>
                </div>


                <div class="copyright">
                    <div class="image">
                    <img src={copyright}></img>
                    </div>
                </div>


                </div>
            </div>




    );
}