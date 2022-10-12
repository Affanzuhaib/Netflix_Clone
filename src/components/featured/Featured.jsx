import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fit">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        
        <img 
        src="https://th.bing.com/th/id/R.d42e2e427e6cfa1ca2ed7696ff6e66e3?rik=ZcklKAipPlC%2bQQ&riu=http%3a%2f%2fdigitalsynopsis.com%2fwp-content%2fuploads%2f2014%2f06%2fsupercar-wallpapers-bugatti-3.jpg&ehk=WtfcviZKcVd56i5JO1NTcka%2fiD7dj2f3m1BUflVm75Q%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <div className="info">
        <img src="https://th.bing.com/th/id/R.cca353c819e9338c3b41745789513f3d?rik=RRsT7lU1%2fIfYsQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwho-am-i-png-the-power-of-i-am-1500.png&ehk=qnBUFA%2frG%2fRqu0CCo4BoDqmIzGnLxV%2fPKbE1aaIZsNk%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quis, reprehenderit dolor excepturi ipsum ab nam quaerat velit quae, quod doloribus quasi sit molestiae sequi molestias! Esse aliquid qui mollitia.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
