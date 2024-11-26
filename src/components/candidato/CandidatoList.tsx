import Candidato from "@/data/model/Candidato"

export interface CandidatosProps {
    candidatos: Candidato[];
}

export default function CandidatoList({candidatos}: CandidatosProps) {
    return (
        <div className="flex flex-col gap-5">
            {candidatos.map((candidato) => (
                <div key={candidato.id} className="bg-zinc-800 p-5 rounded-lg">
                    <h2>{candidato.nome} ({candidato.partido})</h2>
                    <p>{candidato.descricao}</p>
                </div>
            ))}
        </div>
    )
}