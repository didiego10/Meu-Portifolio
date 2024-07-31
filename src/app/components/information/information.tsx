import { SectionTitle } from "../sectionTitle/sectiontitle"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>

        <div className="languages-info">
          <span>🇧🇷 PT-br Native Speaker</span>
        </div>
        
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>
            Cursando Analise e Desenvolvimento de sistemas na Unifahe
          </span>
        </div>
      </div>
    )
}