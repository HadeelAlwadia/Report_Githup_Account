import { useSelector } from "react-redux"
import { RootState } from "../redux"

const Home = () => {
    const {error,loading,userDetailes,reposGitHup}=useSelector((state:RootState)=>state.userDetalies)
    console.log(error,loading,userDetailes,reposGitHup)
  return (
    <div>
       {error} 
    </div>
  )
}

export default Home
