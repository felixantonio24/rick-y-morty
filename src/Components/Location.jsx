import axios from "axios"
import { useState } from "react"
import SearchInput from "./Input"
import ResidentInfo from "./ResidentInfo"

const Location = () => {
    const [data, setData] = useState({})

    const handleSearch = (searchTerm) => {
      axios
        .get(`https://rickandmortyapi.com/api/location/${searchTerm}`)
        .then((resp) => setData(resp.data))
        .catch((error) => console.log(error));
    };
    return(
      <section className="app-container">
        <div className="section-container">
          <div className="location-container">
            <ul className="location-ul">
              <li>Nombre: <br/> {data.name}</li>
              <li>Tipo: <br/>{data.type}</li>
              <li>Dimension: <br/> {data.dimension}</li>
              <li>Poblacion: <br/> {data.residents?.length}</li>
            </ul>
          </div>
          <SearchInput onSearch={handleSearch} />     
        </div>
        <ul className="resident-info">
            {data.residents?.map((url) => (
              <li key={url}>
                <ResidentInfo
                key={url}
                url={url}
                />
              </li>
            ))}
        </ul>
        <div className='footer'/>
      </section>
    )
} 
export default Location