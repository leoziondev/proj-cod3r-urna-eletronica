import { myName } from '@urna/core'

export default function Home() {
  return (    
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Projeto Urna Eletrônica</h1>
        <p>{myName()}</p>
    </div>    
  );
}
