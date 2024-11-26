import CandidatoList from "@/components/candidato/CandidatoList";
import Container from "@/components/shared/Container";
import LayoutVotacao from "@/components/shared/LayoutVotacao";
import candidatos from "@/data/constants/candidatos";

export default function PageCandidato()  {
    return (
        <LayoutVotacao>
            <Container className="py-8">
                <CandidatoList candidatos={candidatos} />
            </Container>
        </LayoutVotacao>
    )
}