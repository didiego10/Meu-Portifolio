import {Header} from "./components/header/header"
import "../styles/home.scss"
import { Experience } from "./components/experience/experience";

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇧🇷 PT-br Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>
              Cursando Analise e Desenvolvimento de sistemas na Unifahe
            </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button>Contate-me!</button>
        </div>
    </main>
  );
}
