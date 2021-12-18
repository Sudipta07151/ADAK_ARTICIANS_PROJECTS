import { useFetchMenuData } from "../hooks/useFetchMenusData";
import { Link } from "react-router-dom";

export default function Menus() {
  const { data } = useFetchMenuData("http://localhost:4000/restaurants");
  return (
    <div>
      {data &&
        data.map((element) => {
          return (
            <div
              key={element.id}
              className=" bg-orange-400 m-4 p-2 font-mono text-lg"
            >
              <p>{element.name}</p>
              <p>{element.address}</p>
              <Link to={`/restaurants/${element.id}`}>see more..</Link>
            </div>
          );
        })}
    </div>
  );
}
