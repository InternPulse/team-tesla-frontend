import ImgCard from "../../assets/box.png";

const Header = () => {
  return (
    <div>
      <div>
        <h1>The Heartbeat to your</h1>
        <h3>Invoice</h3>
        <p>
          We are here to ensure you are able to seamlessly create and manage
          your invoices with ease.
        </p>
        <div>
          <button>Get Started</button>
          <button>Watch a Demo</button>
        </div>
      </div>
      <div>
        <img src={ImgCard} alt="Card" />
      </div>
    </div>
  );
};

export default Header;
