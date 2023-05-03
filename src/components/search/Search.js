import "./search.css";
import x from "../../img/x.svg"
export function Search(){

return(
<div class="search-background">
    <div class="search-content">
                <div class="close">
                    <img src={x}></img>
                </div>

                <div class="search-title">
                    <h2>SEARCH</h2>
                </div>

    </div>
</div>
);

}