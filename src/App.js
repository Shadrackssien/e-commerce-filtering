import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data"
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // input filter
  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  const filterItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 
  );

  //Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = [...products];

    //Filtering Input
    if (query){
      filteredProducts = filterItems;
    }

    //selected filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company,
      newPrice, title}) =>
      category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected 
    )
    }

    return filteredProducts.map(
      ({id,img, title, star, reviews, newPrice, prevPrice}) => (
      <Card 
      key={id}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="App">
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
