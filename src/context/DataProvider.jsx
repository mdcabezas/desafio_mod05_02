import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'
const endpoint = "/fotos.json";

const dataContext = createContext()

export function useDataContext() {
    return useContext(dataContext)
}

function DataProvider({ children }) {

    const [data, setData] = useState([])

    const getData = async () => {
        const {data} = await axios.get(endpoint)
        setData(data.photos)
    }

    const handleToggle = id => setData(data.map(d => d.id === id ? {...d, liked: !d.liked} : d )) 

    useEffect(() => {
        getData()
    }, [])

    return (
        <dataContext.Provider value={{ data, handleToggle }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider





