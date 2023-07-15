const Card = ({ title, date, image, desc }) => {
  // const {title,date,image,desc}=props   destraction
  return (
    <div className="cards">
      <div className="title">
        {/* <h1 className="title">{props.title}</h1> // destraction yapmadan bu şekılde de yazılabılır */}
        <h1 className="title">{title}</h1>
      </div>
      <div className="date">
        <h2 className="date">{date}</h2>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Card;
