import HealthServices from './HealthServices/HealthServices'
import Departments from './Departments/Departments'
import BottomContainer from './BottomContainer/BottomContainer'
import Heading from './Heading/Heading'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <HealthServices />
      <Departments />
      <BottomContainer />
      <Footer />
    </>
  )
}

export default Home
