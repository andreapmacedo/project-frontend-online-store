import { User } from "phosphor-react";
import './Review.css';

export default function Review() {
  return (
    <section className="avaliation-container">
      <div className="validation-container">
        <div className="single-comment">
          <User className="user-icon" size={32} />
          <p>Produto Sensacional.</p>
          <input
            type="range"
            className="rating"
            min="1"
            max="5"
            step="0.5"
            value="5"
            style={ { '--value': 5 } }
          />
        </div>
        <div className="single-comment">
          <User className="user-icon" size={32} />
          <p>Era tudo o que eu precisava!</p>
          <input
            type="range"
            className="rating"
            min="1"
            max="5"
            step="0.5"
            value="4.5"
            style={ { '--value': 4.5 } }
          />
        </div>
        <div className="single-comment">
          <User className="user-icon" size={32} />
          <p>A entrega poderia ser mais rápida.</p>
          <input
            type="range"
            className="rating"
            min="1"
            max="5"
            step="0.5"
            value="2"
            style={ { '--value': 2 } }
          />
        </div>
      </div>
  </section>
  )
}
