import Candidato from "@/data/model/Candidato";
import CandidatoItem from "./CandidatoItem";

export interface CandidatosProps {
    candidatos: Candidato[];
}

export default function CandidatoList({candidatos}: CandidatosProps) {

    return (
        <div className="flex flex-col gap-5">
            {candidatos.map((candidato) => (
                <CandidatoItem
                    key={candidato.id}
                    candidato={candidato}
                />
            ))}
        </div>
    )
}