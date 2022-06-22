
import { useSetRecoilState } from "recoil"
import { IFiltroDeEventos } from "../../interfaces/IFiltrodeEventos"
import { filtroDeEventos } from "../atom"

const useAdicionarFiltrodeEventos = () => {
    const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)
    return (filtro: IFiltroDeEventos) => {
        return setFiltroDeEventos(filtro)
    }
}

export default useAdicionarFiltrodeEventos