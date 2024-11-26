import Candidato from "@/data/model/Candidato"
import Button from "../shared/Button";

interface CandidatoProps {
    candidato: Candidato;
    onDelete: (candidato: Candidato) => void
}

export default function CandidatoItem({ candidato, onDelete }: CandidatoProps) {    
    return (
        <div className="bg-zinc-800 p-5 rounded-lg">
            <h2>{candidato.nome} ({candidato.partido})</h2>
            <p>{candidato.descricao}</p>
            <div className="mt-2">
                <Button
                    onClick={() => onDelete(candidato)}
                    className="bg-red-500 hover:bg-red-600"
                >
                    Excluir
                </Button>
            </div>
        </div>
    )
}