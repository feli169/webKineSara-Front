
import Hero from "../Components/Hero"
import Service from "../Components/Service";


import Contact from "../Components/Contact"

const Home = () => {
  return (
    
      <div className="min-h-screen flex flex-col">
    
      <main className="flex-grow">
        <Hero />
        <Service /> 
        <Contact />
      </main>
    </div>
  )
}

export default Home
