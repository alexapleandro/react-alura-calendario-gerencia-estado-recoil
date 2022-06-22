
import { useSetRecoilState } from "recoil"
import { IFiltroDeEventos } from "../../interfaces/IFiltrodeEventos"
import { filtroDeEventosState } from "../atom"

const useAdicionarFiltrodeEventos = () => {
    const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventosState)
    return (filtro: IFiltroDeEventos) => {
        return setFiltroDeEventos(filtro)
    }
}

export default useAdicionarFiltrodeEventos