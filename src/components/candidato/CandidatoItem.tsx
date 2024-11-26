'use client'

import Candidato from "@/data/model/Candidato"
import Button from "../shared/Button";

interface CandidatoProps {
    candidato: Candidato;
}

export default function CandidatoItem({ candidato }: CandidatoProps) {
    
    const handleDelete = (candidato: Candidato) => {
        console.log(candidato);
        
    }

    return (
        <div className="bg-zinc-800 p-5 rounded-lg">
            <h2>{candidato.nome} ({candidato.partido})</h2>
            <p>{candidato.descricao}</p>
            <div className="mt-2">
                <Button
                    onClick={() => handleDelete(candidato)}
                    className="bg-red-500 hover:bg-red-600"
                >
                    Excluir
                </Button>
            </div>
        </div>
    )
}