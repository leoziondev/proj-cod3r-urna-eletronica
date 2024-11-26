import Link from "next/link";
import Container from "./Container";

export default function Header() {
    return (
        <header className="border-b border-zinc-800">
            <Container className="flex justify-between items-center">
                <h1 className="font-bold text-xl">Eleições 2024</h1>
                <nav className="flex gap-5">
                    <Link href="/" className="text-white">Início</Link>
                    <Link href="/candidato" className="text-white">Candidatos</Link>
                    <Link href="/eleitor" className="text-white">Eleitor</Link>
                </nav>
            </Container>
        </header>
    )
}