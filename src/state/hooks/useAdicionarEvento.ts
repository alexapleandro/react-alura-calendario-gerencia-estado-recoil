
import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../util"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        const hoje = new Date()
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com a data menor do que a atual.")
        }
        evento.id = obterId()
        return setListaEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento