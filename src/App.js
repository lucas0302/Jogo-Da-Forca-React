import palavras from "./constants/palavras";
import alfabeto from "./constants/alfabeto";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import { useState } from "react";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
function App() {
    const [erros, setErros] = useState(0);
    const [palavraEscolhida, setPalavraEscolhida] = useState([]);
    const [palavraJogo, setPalavraJogo] = useState([]);
    const [letrasUsadas, setLetrasUsadas] = useState(alfabeto);
    const [corPalavra, setCorPalavra] = useState("preto");

    function iniciarJogo() {
        setErros(0);
        setLetrasUsadas([]);
        setCorPalavra("preto");
        sortearPalavra();
    }

    function finalizarJogo() {
        setPalavraJogo(palavraEscolhida);
        setLetrasUsadas(alfabeto);
    }
    function sortearPalavra() {
        const indice = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[indice];
        const palavraArray = palavra.split("");
        setPalavraEscolhida(palavraArray);

        let tracinhos = [];
        palavraArray.forEach(() => tracinhos.push(" _ "));
        setPalavraJogo(tracinhos);
    }

    function clicarLetra(letra) {
        setLetrasUsadas([...letrasUsadas, letra]);

        if(palavraEscolhida.includes(letra)){
            acertoletra(letra);
        }else{
            erroLetra(letra);
        }
    }

    function acertoletra(letra) {
        const novaPalavraJogo = [...palavraJogo];

        palavraEscolhida.forEach((l, i)=> {
            if(l === letra){
                novaPalavraJogo[i] = letra;
            }
        });
        setPalavraJogo(novaPalavraJogo);
        
        if(!novaPalavraJogo.includes(" _ ")){
            setCorPalavra("verde");
            finalizarJogo();
        }
    }

    function erroLetra(letra) {
        const novosErros = erros + 1;
        setErros(novosErros);

        if(novosErros === 6){
            setCorPalavra("vermelho");
            finalizarJogo();
        }
    }

    return (
        <div className="container-tela">
            <div className="container-forca">
                <img src={imagens[erros]} alt="forca" />
                <button onClick={iniciarJogo}>Escolher palavra</button>
                <h1 className={corPalavra} >{palavraJogo}</h1>
            </div>
            <div className="container-letras">
                {alfabeto.map((letra) => <button key={letra}
                    disabled={letrasUsadas.includes(letra)}
                    onClick={() => clicarLetra(letra)}>{letra}</button>)}
            </div>

        </div>
    )

}
export default App;