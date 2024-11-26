import Container from "./Container";

export default function Header() {
    return (
        <header className="h-24 border-b border-zinc-800 px-5">
            <Container className="flex justify-between items-center">
                <h1 className="font-bold text-xl">Eleições 2024</h1>
                <nav className="flex gap-5">
                    <a href="#" className="text-white">Início</a>
                    <a href="#" className="text-white">Candidatos</a>
                    <a href="#" className="text-white">Partidos</a>
                </nav>
            </Container>
        </header>
    )
}