import { ArrowBackIosOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIosOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls 
        //src="https://player.vimeo.com/external/576787721.sd.mp4?s=0d7d41391cf527ddd857113d790712a09fef9ce2&profile_id=164&oauth2_token_id=57447761"
        src="https://redirect.veoh.com/flash/p/2/v142227846r6Dy9E9Z/h142227846.mp4?ct=a4ad22aaa016effc39761998f0acd852aaee59f675bd5b69"/>
    </div>
  )
}
