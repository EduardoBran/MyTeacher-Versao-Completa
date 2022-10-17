import { useState } from "react";
import { Professor } from "../../@types/professor";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([
        {
            id: 1,
            nome: "Professor 1",
            foto: "https://github.com/EduardoBran.png",
            descricao: "Descrição do professor 1",
            valor_hora: 100
        },
        {
            id: 2,
            nome: "Professor 2",
            foto: "https://github.com/EduardoBran.png",
            descricao: "Descrição do professor 2",
            valor_hora: 100
        },
        {
            id: 3,
            nome: "Professor 3",
            foto: "https://github.com/EduardoBran.png",
            descricao: "Descrição do professor 3",
            valor_hora: 100
        },
        {
            id: 4,
            nome: "Professor 4",
            foto: "https://github.com/EduardoBran.png",
            descricao: "Descrição do professor 4",
            valor_hora: 100
        },
    ]);

    return {
        listaProfessores: listaProfessores
    }
}

