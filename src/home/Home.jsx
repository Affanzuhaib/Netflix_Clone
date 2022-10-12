import Featured from "../components/featured/Featured"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"

//<Featured type="movie"/>
        

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
    </div>
  )
}

export default Home