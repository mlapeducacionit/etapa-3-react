import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext()
// ! 2. Armamos el provider
const ProductosProvider = ( { children} ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {

            const prods = await helperPeticionesHttp(url, null)

            console.log(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const data = {

    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}
// ! 3. Exportamos el contexto y provider

export { ProductosProvider }
export default ProductosContext