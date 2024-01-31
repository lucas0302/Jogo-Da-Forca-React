import forca0 from "../assets/forca0.jpg";
import forca1 from "../assets/forca1.jpg";
import forca2 from "../assets/forca2.jpg";
import forca3 from "../assets/forca3.jpg";
import forca4 from "../assets/forca4.jpg";
import forca5 from "../assets/forca5.jpg";
import forca6 from "../assets/forca6.jpg";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
export default function Jogo({erros, iniciarJogo,palavraJogo, corPalavra}) {
    return (
        
            <div className="container-forca">
                <img src={imagens[erros]} alt="forca" />
                <button onClick={iniciarJogo}>Escolher palavra</button>
                <h1 className={corPalavra} >{palavraJogo}</h1>
            </div>
    );
}