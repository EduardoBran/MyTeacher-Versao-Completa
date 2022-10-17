import { Aluno } from "../../@types/aluno";
import { Descricao, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome } from "./Lista.style";

interface ListaProps {
    alunos: Aluno[],
}

const Lista2 = (props: ListaProps) => {

    return (
        <div>
            {props.alunos.length > 0 ? (
                <ListaStyled>
                    {props.alunos.map(aluno => (
                        <ItemLista key={aluno.id}>
                            <Informacoes>
                                <Nome>{aluno.nome}</Nome>
                                <Descricao>{aluno.materia}</Descricao>
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

export default Lista2;


