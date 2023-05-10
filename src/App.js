import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'laptop', price:'125000'},
    {name:'iphone', price:'65000'},
    {name:'watch', price:'5000'},
    {name:'tablet', price:'15000'},
  ]

  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price} ></Product>)
      }
      {/* <Product name="laptop" price="65000"></Product>
      <Product name="iphone" price="24000"></Product> */}
    </div>
  );
}
function Product(props){
  return(
  <div className="product">
    <h3>Name: {props.name} </h3>
    <p>Price:{props.price} </p>
  </div>
  )
}

export default App;
