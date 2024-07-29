import Image from "next/image"
import "./header.scss"


export function Header(){
    return(
        <div className="header">
          <div>
            <h1> Meu nome é Diego Moreno👋</h1>
            <h2> Developer front-end</h2>
          </div>
        
        <Image
          src="/foto-portifolio.jpg"
          alt="Vercel Logo"
          width={325}
          height={290}
          priority
        />
      </div>
    
    )
}