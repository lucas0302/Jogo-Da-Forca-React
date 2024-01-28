import palavras from "./constants/palavras";
import alfabeto from "./constants/alfabeto";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";
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

        if (palavraEscolhida.includes(letra)) {
            acertoletra(letra);
        } else {
            erroLetra(letra);
        }
    }

    function acertoletra(letra) {
        const novaPalavraJogo = [...palavraJogo];

        palavraEscolhida.forEach((l, i) => {
            if (l === letra) {
                novaPalavraJogo[i] = letra;
            }
        });
        setPalavraJogo(novaPalavraJogo);

        if (!novaPalavraJogo.includes(" _ ")) {
            setCorPalavra("verde");
            finalizarJogo();
        }
    }

    function erroLetra() {
        const novosErros = erros + 1;
        setErros(novosErros);

        if (novosErros === 6) {
            setCorPalavra("vermelho");
            finalizarJogo();
        }
    }

    return (
        <div className="container-tela">
            <Jogo erros={erros} iniciarJogo={iniciarJogo} corPalavra={corPalavra} palavraJogo={palavraJogo}/>
            <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra}/>
        </div>
    )

}
export default App;