import alfabeto from "../constants/alfabeto";
export default function Letras({letrasUsadas, clicarLetra}) {
    return (
        <div className="container-letras">
            {alfabeto.map((letra) => <button key={letra}
                disabled={letrasUsadas.includes(letra)}
                onClick={() => clicarLetra(letra)}>{letra}</button>)}
        </div>
    );
}