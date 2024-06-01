import './index.css'
import Car_Blue from '../../assets/blue_car.png'
import Red_Car from '../../assets/car_red.png'
import Car_White from '../../assets/car-white.png'

const Index = () => {
  return (
    <div className='container'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Car_White} className="car" alt="blue" />
        </div>
        <div className="carousel-item">
          <img src={Red_Car} className="car" alt="red" />
        </div>
        <div className="carousel-item">
          <img src={Car_Blue} className="car" alt="black" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}

export default Index