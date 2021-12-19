import { useParams } from "react-router-dom";
import { useFetchMenuData } from "../hooks/useFetchMenusData";

export default function SeeMore() {
  const param = useParams();
  const url = "http://localhost:4000/restaurants/" + param.id;
  const { data } = useFetchMenuData(url);
  return (
    <div className=" bg-amber-300 text-xl absolute top-36 left-0">
      {data && (
        <>
          <p>{data.name}</p>
          <p>{data.address}</p>
          <p>{data.cuisine_type}</p>
        </>
      )}
    </div>
  );
}
