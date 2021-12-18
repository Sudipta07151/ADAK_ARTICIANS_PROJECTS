import { useLocation } from "react-router-dom"

export default function Reservation() {
    const queryString=useLocation().search;
    const queryParse=new URLSearchParams(queryString);
    console.log(queryParse.get("name"));
    return (
        <div>
            RESERVATIONS
            {queryString}
            {queryParse.get("name")}
        </div>
    )
}