'use client'

import Candidato from "@/data/model/Candidato"
import { useState } from "react";
import Button from "../shared/Button";

interface FormCandidatoProps {
    candidato: Partial<Candidato>;
    onSave?: (candidato: Candidato) => void
    onCancel?: () => void
}

export default function FormCandidato({ candidato, onCancel }: FormCandidatoProps) {
    const [singleCandidato, setSingleCandidato] = useState<Partial<Candidato>>(candidato)

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="space-y-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-semibold text-zinc-500">Nome:</span>
                    <input
                        type="text"
                        value={singleCandidato.nome}
                        onChange={(e) => setSingleCandidato({...singleCandidato, nome: e.target.value})}
                        className="w-full bg-zinc-900 rounded-md py-2 px-4"
                    />
                </div>
                
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-semibold text-zinc-500">Número:</span>
                    <input
                        type="number"
                        value={singleCandidato.numero}
                        onChange={(e) => setSingleCandidato({...singleCandidato, numero: +e.target.value})}
                        className="w-full bg-zinc-900 rounded-md py-2 px-4"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-semibold text-zinc-500">Partido:</span>
                    <input
                        type="text"
                        value={singleCandidato.partido}
                        onChange={(e) => setSingleCandidato({...singleCandidato, partido: e.target.value})}
                        className="w-full bg-zinc-900 rounded-md py-2 px-4"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-semibold text-zinc-500">Partido:</span>
                    <textarea
                        value={singleCandidato.descricao}
                        onChange={(e) => setSingleCandidato({...singleCandidato, descricao: e.target.value})}
                        className="w-full bg-zinc-900 rounded-md py-2 px-4"
                    >{singleCandidato.descricao}</textarea>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-8">
                <Button
                    onClick={onCancel}
                    className="bg-zinc-800 hover:bg-zinc-900"
                >
                    Cancelar
                </Button>
                <Button
                    // onClick={() => onDelete(candidato)}
                    className="bg-sky-500 hover:bg-sky-600"
                >
                    Salvar
                </Button>
                
            </div>
        </div>
    )
}