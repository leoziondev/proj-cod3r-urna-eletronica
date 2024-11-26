'use client'

import Candidato from "@/data/model/Candidato"
import CandidatoItem from "./CandidatoItem";
import { useState } from "react";

export interface CandidatosProps {
    candidatos: Candidato[];
}

export default function CandidatoList({candidatos}: CandidatosProps) {
    const [allCandidatos, setAllCandidatos] = useState(candidatos)

    function handleDelete(candidato: Candidato) {
        setAllCandidatos((prev) => prev.filter((c) => c.id !== candidato.id))      
    }

    return (
        <div className="flex flex-col gap-5">
            {allCandidatos.map((candidato) => (
                <CandidatoItem
                    key={candidato.id}
                    candidato={candidato}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}