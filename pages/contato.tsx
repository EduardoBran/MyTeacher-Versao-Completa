import { Box } from "@mui/material";
import { NextPage } from "next";
import { Aluno } from "../src/@types/aluno";
import Lista2 from "../src/components/Lista/ListaAlunos";

const home: NextPage = () => {

    const alunos: Aluno[] = [
        {
            id: 1,
            nome: "Aluno 1",
            materia: "Materia 1"
        },
        {
            id: 1,
            nome: "Aluno 2",
            materia: "Materia 2"
        },
    ]
    return (
        <Box sx={{ backgroundColor: 'secondary.main' }}>
            <Lista2 alunos={alunos}></Lista2>
        </Box>
    )
}

export default home;