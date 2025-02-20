import Candidato from "@/data/model/Candidato"
import Button from "../shared/Button";

interface CandidatoProps {
    candidato: Candidato;
    onDelete: (candidato: Candidato) => void
    onSelect: (candidato: Candidato) => void
}

export default function CandidatoItem({ candidato, onDelete, onSelect }: CandidatoProps) {    
    return (
        <div className="bg-zinc-800 p-5 rounded-lg">
            <h2>{candidato.nome} ({candidato.partido})</h2>
            <p>{candidato.descricao}</p>
            <div className="flex items-center gap-2 mt-2">
                <Button
                    onClick={() => onSelect(candidato)}
                    className="bg-sky-500 hover:bg-sky-600"
                >
                    Editar
                </Button>
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