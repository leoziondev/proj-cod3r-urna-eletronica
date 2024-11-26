'use client'

import Candidato from "@/data/model/Candidato"
import CandidatoItem from "./CandidatoItem";
import { useState } from "react";
import FormCandidato from "./FormCandidato";
import Button from "../shared/Button";

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

    function handleSaveCandidato(candidato: Partial<Candidato>) {
        console.log(candidato);
        
        if (candidato.id) {
            setAllCandidatos(allCandidatos.map((c) => 
                c.id === candidato.id ? (candidato as Candidato) : c
            ))
        } else {
            const id = Math.random()
            setAllCandidatos([...allCandidatos, {...candidato, id} as Candidato])
        }
        setSelectCandidato(null)
    }

    return (
        <>
            <div className="flex justify-end mb-8">
                <Button
                    onClick={() => setSelectCandidato({})}
                    className="bg-sky-500 hover:bg-sky-600"
                >
                    Novo Candidato
                </Button>
            </div>
            <div className="flex flex-col gap-5">
                {selectCandidato ? (
                    <FormCandidato
                        candidato={selectCandidato}
                        onCancel={() => setSelectCandidato(null)}
                        onSave={handleSaveCandidato}
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
        </>
    )
}