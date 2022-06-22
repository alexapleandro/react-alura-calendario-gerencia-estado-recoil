import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useAtualizarEvento = () => {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (eventoEditado: IEvento) => {
        return  setListaEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(evt => evt.id === eventoEditado.id);
            return [...listaAntiga.slice(0, indice), eventoEditado, ...listaAntiga.slice(indice + 1)]
        })
    }
}

export default useAtualizarEvento