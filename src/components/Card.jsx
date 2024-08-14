import './Card.scss'

const Card = () => {
  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src="img/apple-iphone-11-pro-max.jpg"
            alt="Iphone 11 Pro Max"
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">Iphone 11 Pro Max</h2>
          <div className="card__description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              error fugiat placeat facere quasi illum?
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
