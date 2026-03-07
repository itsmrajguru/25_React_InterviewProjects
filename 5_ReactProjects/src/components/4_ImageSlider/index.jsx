import { useEffect, useState } from "react";

//importing arrows for navigation
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'
function ImageSliderComponent({ url, limit = 5, page = 1 }) {

    //states
    const [images, setImages] = useState([])  //to set image
    const [currentSlideImage, setCurrentSlideImage] = useState(0) //to show current sliding image
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    //fetching API
    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const apiRes = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const apiResult = await apiRes.json()

            if (apiResult) {
                setImages(apiResult)
            }
            else {
                setErrorMsg("Error Fetching the Data")
            }
        } catch (e) {
            console.log(e);
            setErrorMsg(e.message)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    console.log(images);

    //displaying loading and error in the front page
    if (loading) return <h3>Loading Data ! please Wait</h3>
    if (errorMsg !== null) return <h3>Error :{errorMsg}</h3>

    //functions to handle arrow button navigation

    function handlePrevious() {
        setCurrentSlideImage(currentSlideImage === 0 ? images.length - 1 : currentSlideImage - 1)
    }
    function handleNext() {
        setCurrentSlideImage(currentSlideImage === images.length - 1 ? 0 : currentSlideImage + 1)
    }
    return (
        <div className="container">
            <h1>Image Slider </h1>
                <BsArrowRightCircleFill onClick={handlePrevious} className="arrow arrow-left" />
                {
                    images && images.length
                        ? images.map((imgItem, index) => (
                            <img
                                key={imgItem.id}
                                src={imgItem.download_url}
                                alt={imgItem.url}
                                className={
                                    currentSlideImage === index
                                        ? "current-image"
                                        : "current-image hide-current-image"
                                } />
                        )
                        )
                        : null
                }
                <BsArrowLeftCircleFill onClick={handleNext} className="arrow arrow-right" />

                {/* creating Circle Indicators */}
                <span className="circle-indicators">
                    {
                        images && images.length
                            ? images.map((_, index) => (
                                <button
                                    key={index}
                                    className={
                                        currentSlideImage === index
                                            ? "current-indicator"
                                            : "current-indicator inactive-indicator"
                                    }
                                    onClick={() => setCurrentSlideImage(index)}
                                >
                                </button>
                            ))
                            : null
                    }
                </span>
            </div>
    );
}

export default ImageSliderComponent;