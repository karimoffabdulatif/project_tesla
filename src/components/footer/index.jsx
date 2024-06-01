import './index.css'
import Footer_Img from '../../assets/footer_p.png'
import Footer_Btn from '../../assets/footer_btn.png'
const Index = () => {
  return (
    <div className='container'>
        <img src={Footer_Img} alt="img"  className='img_footer'/>
        <img src={Footer_Btn} alt="btn"  className='btn_footer'/>
    </div>
  )
}

export default Index