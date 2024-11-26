import CandidatoList from "@/components/candidato/CandidatoList";
import Container from "@/components/shared/Container";
import candidatos from "@/data/constants/candidatos";

export default function PageCandidato()  {
    return (        
        <Container className="py-8">
            <CandidatoList candidatos={candidatos} />
        </Container>        
    )
}