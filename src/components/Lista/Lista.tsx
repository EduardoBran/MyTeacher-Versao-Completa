import { Button } from "@mui/material";
import { useState } from "react";
import { Professor } from "../../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {

    // const contadorEstado = useState(2);
    // const contador = contadorEstado[0];
    // const setContador = contadorEstado[1];

    // deixando mais limpo

    const [contador, setContador] = useState(0);

    return (
        <div>
            {/* contador */}
            <div>Contador igual {contador}</div>
            <button onClick={() => setContador(contador + 1)}>Somar +1</button>

            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        // eslint-disable-next-line react/jsx-key
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto} />
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%' }}>Marcar Aula com Eduardo</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista;