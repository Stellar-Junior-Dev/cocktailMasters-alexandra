import "./category.css";
import {Card} from "../card/Card";

export function Category({categoryTitle}){



    return(
      <>
      <div class="category">


        <div class="catDetails">

        <div class="catTitle">
          <h1>{categoryTitle}</h1>
        </div>
        <div class="view">
          <a>view all {">"}</a>
        </div>


        </div>
  
        <div class="cardContainer">
        <Card/>
        <Card/>
        <Card/>
        </div>
  
      </div>
      </>
    );
  }