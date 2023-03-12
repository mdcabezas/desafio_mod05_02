import { useDataContext } from "../context/DataProvider";

export default function Favoritos() {
  const { data } = useDataContext()

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {data.map(element => element.liked && (
          <div key={element.id} className='foto' style={{ backgroundImage: `url(${element.src.tiny})` }} >
          </div>
        ))}
      </div>
    </div>
  );
}
