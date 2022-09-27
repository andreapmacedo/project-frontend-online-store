import BotaoVoltar from '../../components/BotaoVoltar';
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
import './style.css';
import { Link } from 'react-router-dom';

export default function PurchaseCheckout() {
  return (
    <div className="main-page-container">
      <div className="main-top-menu-container">
        <TopMenu></TopMenu>
      </div>
      <div className="main-body-container" >
        <div className="main-body-side-menu">
          <SideMenu></SideMenu>
        </div>
        <section className="checkout-body">
          <div className="checkout-container">
            <h3>Compra finalizada, agradecemos pela preferencia 🛒</h3>
            <Link
              to="/main"
            >
              <button
                type="button"
              >
                Ver mais produtos
              </button>
            </Link>
          </div>
        </section>
      </div>
      <BotaoVoltar />
    </div>)
}
