import './App.css'
import ModalTest from './components/11_CustomModal'
import AccordianComponent from './components/1_Acoordian'
import GenerateRandomColor from './components/2_randomColor'
import StarRatingComponent from './components/3_StarRating'
import ImageSliderComponent from './components/4_ImageSlider'
import LoadMoreComponent from './components/5_LoadMoreButton'
import TreeMenu from './components/6_TreeView'
import QRCodeGenerator from './components/7_QRCodeGenerator'
import LightDarkMode from './components/8_LightDarkMode'
import ScrollIndicator from './components/9_scroll-indicator'

function App() {
  
  return (
    <>
      <h1 style={{ fontWeight: "900" }}>25 React Projects By Mangesh Rajguru</h1>

      <div className="projects-container">

        {/* <div className="outline">
          <AccordianComponent /></div>

        <div className="outline">
          <GenerateRandomColor /></div>

        <div className="outline">
          <StarRatingComponent noofStars={15} /></div>

        <div className="outline">
          <ImageSliderComponent
            url="https://picsum.photos/v2/list"
            page={1}
            limit={10} /></div>

          <div className="outline">
            <LoadMoreComponent/>
          </div>

          <div className="outline">
            <TreeMenu/></div>

          <div className="outline">
            <QRCodeGenerator/>
          </div>

          <div className="outline">
            <LightDarkMode/>
          </div>

          <div className="outline">
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
          </div> */}

          <div className="outline">
            <ModalTest/>
          </div>
      </div>
    </>
  )
}

export default App