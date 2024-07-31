import { GitHubIcon } from "../icons/gitHub"
import {InstaIcon} from "../icons/insta-icon"
import { LinkedinIcon } from "../icons/linkedin"
import { TwiterIcon } from "../icons/twiterIcon"

import "./social-btns.scss"

export default function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/di.ricardo.moreno">
                <InstaIcon />
            </a>
            <a href="https://www.linkedin.com/in/diego-ricardo-moreno/">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/didiego10">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwiterIcon/>
            </a>
          </div>
    )
}