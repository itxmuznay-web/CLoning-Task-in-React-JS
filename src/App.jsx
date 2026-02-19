import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import './App.css'
import heroImage from './images/hero_image.jpg'
import box2Image from './images/box2_image.jpg'
import box3Image from './images/box3_image.jpg'
import box4Image from './images/box4_image.jpg'
import box5Image from './images/box5_image.jpg'
import box6Image from './images/box6_image.jpg'
import box7Image from './images/box7_image.jpg'
import box8Image from './images/box8_image.jpg'

function App() {
  return (
    <div>
      <Header />
      
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-mesg">
          <p>
            you are amazon.com.You can also shop on Amazon India for millions of products with fast local delivery
            <a href="#">Click here to go amazon.con</a>
          </p>
        </div>
      </div>

      <div className="shop-container">
        <div className="shop-sec">
          <div className="box1 box">
            <div className="box-content">
              <h2>Health & Personal Care</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box2Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box2 box">
            <div className="box-content">
              <h2>Clothes</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box2Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box3 box">
            <div className="box-content">
              <h2>Furniture Center</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box3Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box4 box">
            <div className="box-content">
              <h2>Mobile Phone</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box4Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box1 box">
            <div className="box-content">
              <h2>Beauty Make-up</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box5Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box2 box">
            <div className="box-content">
              <h2>Dog & Cat</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box6Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box3 box">
            <div className="box-content">
              <h2>Stationary</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box7Image})` }}></div>
              <p>See more</p>
            </div>
          </div>

          <div className="box4 box">
            <div className="box-content">
              <h2>Fashion- Design</h2>
              <div className="box-img" style={{ backgroundImage: `url(${box8Image})` }}></div>
              <p>See more</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App