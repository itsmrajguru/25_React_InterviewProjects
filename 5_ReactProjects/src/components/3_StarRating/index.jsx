import {useState} from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

function StarRatingComponent({ noofStars }) {

    //states
    const [rating, setRating] = useState(0);  //for Current Index
    const [hover, setHover] = useState(0);    //for Hover Index

    //functions
    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }   

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }
    return (
        <div className="star-rating">
            <h1>Star Rating Component</h1>

            {
                /*  Firstly we need to make an empty
                    array that will store dyanamic no of Stars 
                    and then we will need a map function to point to
                    index to work on it indivisually 
                */
                [...Array(noofStars)].map((_, index) => {
                    index += 1

                    return <FaStar

                    className={index <= (hover || rating) ? "active" : "inactive"}
                    key={index}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    />
                })
            }
        </div>
    );
}

export default StarRatingComponent;

