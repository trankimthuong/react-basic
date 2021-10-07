import "./App.css";
import Product from "./components/Product";
function onClick(){
  console.log("Hello world!");
}

function App() {
  var products = [
    {
      id: 1,
      name: "Apple iphone 13 512gb",
      price: 30000000,
      image: "https://bachlongmobile.com/bnews/wp-content/uploads/2021/04/iphone-13-series.jpg",
      status: true,
    },
    {
      id: 2,
      name: "Macbook pro M1",
      price: 31000000,
      image:
        "data:image/jpeg;base64,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",
      status: true,
    },
    {
      id: 3,
      name: "Samsung galaxy note 10",
      price: 17000000,
      image: "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-note-10-plus-didongviet_7.jpg",
      status: true,
    },
  ];

  let elements = products.map((product, index) => {
    if (product.status)
      return (
        <Product key={index} price={product.price} image={product.image}>
          {product.name}
        </Product>
      );
    return "";
  });
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Props</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">{elements}</div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-success" onClick={onClick}>
                Click Me!
              </button>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
