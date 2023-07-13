import axios from "axios"
import { useState, useEffect } from "react"
const ResidentInfo = ({url}) => {

    const [data, setData] = useState({})

    useEffect(() => {
        axios
          .get(url)
          .then(resp => setData(resp.data))
          .catch(error => console.log(error))
    },[url])
    return (
        <section className="card-info">
          <img src={data.image} alt="img-card" />
          <div className="card-info-data">
            <h2>{data.name}</h2>
            <p>Estado: {data.status}</p>
            <p>Origen: {data?.origin?.name}</p>
            <p>Apariciones: {data.episode?.length}</p>
          </div>
        </section>
    )
}
export default ResidentInfo