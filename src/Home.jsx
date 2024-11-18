import { Link } from "react-router-dom";
import "./App.css";
function Home() {
  return ( <>
  <div className="flex flex-col justify-center items-center">
        <div className="background h-screen ">
        <div className="font-Merriweather text-md flex flex-col justify-center items-center ">
            <Link
             to="/login">
              <button className=" text-orange-400 text-3xl font-semibold bg-transparent rounded-lg px-8 py-2 border border-orange-400 mt-60 mx-20 ">
                Login
              </button>
            </Link>
          </div>
          </div>
          </div>
  </>
  )
}

export default Home;
