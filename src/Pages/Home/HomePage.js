import { CarrouselComponents } from "../../Components/Carrousel/CarrouselComponents"
import { Header } from "../../Components/Headers/HeadersComponent"

export const HomePage = () => {
    return(
        <>
            <Header appName="Cursos.dev"/>
            <CarrouselComponents/>
        </>
    )
}