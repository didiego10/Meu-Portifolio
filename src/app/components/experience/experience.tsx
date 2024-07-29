import { SectionTitle } from "../sectionTitle/sectiontitle"

import "./experience.scss"

export function Experience(){
    return(
    <div className="experience">
        <SectionTitle text={"Experience"}/>
        
        <p>
          Tenho expereciencia desde o ano de 2023 em HTML, CSS, JavaScript e
          frameworks <br /> Como React</p>
        <div className="experience-time"></div>
    </div>
    )
}