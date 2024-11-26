'use client'

import Candidato from "@/data/model/Candidato"
import CandidatoItem from "./CandidatoItem";
import { useState } from "react";
import FormCandidato from "./FormCandidato";

export interface CandidatosProps {
    candidatos: Candidato[];
}

export default function CandidatoList({candidatos}: CandidatosProps) {
    const [selectCandidato, setSelectCandidato] = useState<Partial<Candidato> | null>(null)
    const [allCandidatos, setAllCandidatos] = useState(candidatos)

    function handleDelete(candidato: Candidato) {
        setAllCandidatos((prev) => prev.filter((c) => c.id !== candidato.id))      
    }

    function handleSelect(candidato: Candidato) {
        setSelectCandidato(candidato)      
    }

    function handleClearCandidato() {
        setSelectCandidato(null)
    }

    return (
        <div className="flex flex-col gap-5">
            {selectCandidato ? (
                <FormCandidato
                    candidato={selectCandidato}
                    onCancel={handleClearCandidato}
                />
            ) : (
                <>
                    {allCandidatos.map((candidato) => (
                        <CandidatoItem
                            key={candidato.id}
                            candidato={candidato}
                            onDelete={handleDelete}
                            onSelect={handleSelect}
                        />
                    ))}
                </>
            )}
        </div>
    )
}