import {Header} from "./components/header/header"
import "../styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>
          Tenho expereciencia desde o ano de 2023 em HTML, CSS, JavaScript e
          frameworks
          <br /> Como React
        </p>
        <div className="experience-time"></div>
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
      </div>
    </main>
  );
}
