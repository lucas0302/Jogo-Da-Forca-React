import palavras from "./constants/palavras";
import alfabeto from "./constants/alfabeto";
import forca0 from "./assets/forca0.png";
function App() {
    return (
        <div className="container-tela">
            <div className="container-forca">
                <img src={forca0} alt="forca" />
                <button>Escolher palavra</button>
                <h1>_ _ _ _ _ _ _</h1>
            </div>
            <div className="container-letras">
                {alfabeto.map((letra) => <button key={letra}c disabled={true} >{letra}</button> )}
            </div>

        </div>
    )

}
export default App;