import './Stars.css';

interface Props {
    numberOfStars: number
}

export const Stars = (props: Props) => {
    switch (props.numberOfStars) {
        case 1:
            return <div className="stars-container">
                <p>1 / 5</p>
                <img src="/assets/red-star.png" alt="Red star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
            </div>
        case 2:
            return <div className="stars-container">
                <p>2 / 5</p>
                <img src="/assets/red-star.png" alt="Red star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
            </div>
        case 3:
            return <div className="stars-container">
                <p>3 / 5</p>
                <img src="/assets/red-star.png" alt="Red star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
            </div>
        case 4:
            return <div className="stars-container">
                <p>4 / 5</p>
                <img src="/assets/red-star.png" alt="Red star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/gray-star.png" alt="Gray star"/>
            </div>
        case 5:
            return <div className="stars-container">
                <p>5 / 5</p>
                <img src="/assets/red-star.png" alt="Red star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
                <img src="/assets/red-star.png" alt="Gray star"/>
            </div>
    }

    return (
        <></>
    )
}