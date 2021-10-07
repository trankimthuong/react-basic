import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  var a = 5;
  var name = "Hehe Until You";
  var b = 7;

  var product = {
    id: 1,
    name: "Samsung galaxy Note 10",
    price: 20000000,
    status: false,
  };
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#">
          Title
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </nav>
      <div className="ml-30">
        <h2>
          a: {a}
          <br />
          b: {b}
          <br />a + b = {a + b}
        </h2>
        <h3>
          name: {name}
        </h3>
        <h3>
          ID: {product.id}<br/>
          Name: {product.name}<br/>
          Price: {product.price} VND<br/>
          Status: {product.status ? 'Active':'Pending'}
        </h3>
      </div>
    </div>
  );
}

export default App;
