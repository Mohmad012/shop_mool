import './App.css';
import data from './data'

const addProd = data.products.map((product) => (
                  <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                      <img
                        className="medium"
                        src={product.images}
                        alt={product.name}
                      />
                    </a>
                    <div className="card-body">
                      <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                      </a>
                      <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                      </div>
                      <div className="price">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                ))

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazon</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {addProd}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
