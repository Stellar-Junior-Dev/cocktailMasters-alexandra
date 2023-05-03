import search from './img/search.svg';
import menu from './img/menu.svg';
import './App.css';
import { Category } from './components/category/Category';
import { Options } from './components/options/Options';


function App() {
  return (
    <div>
      <Options/>

    <div class="details">
    <a class="search">
        <img src={search}/>
    </a>
    <a class="menu">
    <img src={menu}/>
    </a>

</div>
<div class="title">
    <h2>COCKTAIL MASTER</h2>
</div>

<div class="content">
  <Category categoryTitle="POPULAR DRINKS"/>
  <Category categoryTitle="LATEST DRINKS"/>
  <Category categoryTitle="RANDOM DRINKS"/>


</div>


</div>
  );
}



export default App;
