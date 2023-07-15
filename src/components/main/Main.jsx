import { data } from "../../helper/data";
import Card from "./Card";
const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Main;