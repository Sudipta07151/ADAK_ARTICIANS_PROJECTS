import { useLocation } from "react-router-dom"

export default function Reservation() {
    const queryString=useLocation().search;
    const queryParse=new URLSearchParams(queryString);
    console.log(queryParse.get("name"));
    return (
        <div className="absolute top-36 left-0">
            RESERVATIONS
            {queryString}
            {queryParse.get("name")}
        </div>
    )
}