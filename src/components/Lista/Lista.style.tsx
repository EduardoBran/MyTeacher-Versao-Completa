import { styled } from "@mui/material";

//componente principal que engloba todos
export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 900px; // mesmo se estiver em tela grande, nao passa de 900px
    margin: 0 auto; // centralizando
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
    // padding: 80px 16px 80px 16px;

    display: grid;
    // pegando o tamanho (100% ou 900px) e dividindo em duas frações
    grid-template-columns: 1fr 1fr; // fazendo ficar com dois itens por vez com grid
    gap: ${({ theme }) => theme.spacing(9)}; // separarando os itens

    // falando que em dispositivos diferentes, queremos um comportamente diferente
    // abaixo de medium device
    ${({ theme }) => theme.breakpoints.down('md')} { 
        grid-template-columns: 1fr; // fazendo ficar com 1 item por vez com grid            
        gap: ${({ theme }) => theme.spacing(9)};
    }
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 0)};
`;

//componente de cada professor
export const ItemLista = styled('li')`
    list-style: none;
`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Informacoes = styled('div')``;

export const Nome = styled('h3')`
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)}; // 2x8=16 , se fosse 1 seria 1x8    
    /* margin: 16px 0 0 0; */ 

    // usar o nosso tema para estilziar outros detalhes
    // dentro do nosso tema temos uma funcao chamada Space
    // esta funcao retorna um espaçamento padrão com base de 8px
    // principal vantagem do spacing é a padronização
    // ao invés de um lugar ter um espaçamento de 12 e outro 17, sempre usaremos a base 8
    // sempre teremos um padrão com base de 8px
`;

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.main} 
    // color: ${(props) => props.theme.palette.primary.main} 
`;

export const Descricao = styled('p')`
    word-break: break-word;
    //especificando como será a quebra de linha
`;