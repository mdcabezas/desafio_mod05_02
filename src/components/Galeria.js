import "../assets/css/galeria.css";
import Heart from "./Heart";
import {useDataContext} from "../context/DataProvider";

export default function Home() {

  const {data} = useDataContext()

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map(element => (
        <div key={element.id} className='foto' style={{backgroundImage:`url(${element.src.tiny})`}} >
          <Heart filled={(element.liked)} id={element.id} />
          <p>{element.alt}</p>
        </div>
      ))}
    </div>
  );
}
