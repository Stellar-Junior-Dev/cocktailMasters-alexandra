import search from './img/search.svg';
import menu from './img/menu.svg';
import './App.css';

function App() {
  return (
    <div>
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



<div class="popular">
<div class="category">
  <h2>POPULAR DRINKS</h2>
</div>
</div>

<div class="latest">
<div class="category">
  <h2>LATEST DRINKS</h2>
</div>
</div>


<div class="random">
<div class="category">
  <h2>RANDOM DRINKS</h2>
</div>
</div>

</div>


</div>
  );
}



export default App;
