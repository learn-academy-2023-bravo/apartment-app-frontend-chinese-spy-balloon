import {
  Input,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap"
import Slider from "react-slick"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
  function PrevArrow(props) {
    const { className, onClick } = props
    return <BsChevronLeft className={className} onClick={onClick} />
  }

  function NextArrow(props) {
    const { className, onClick } = props
    return <BsChevronRight className={className} onClick={onClick} />
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div className="wrap">
      <div className="search">
        <Input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </div>
      <Slider {...settings}>
        <div>
          <Card className="suggestion_card1">
            <img
              alt="Sample"
              src="https://img.money.com/2021/01/Beware-Rental-Scams-1.jpg?quality=60&w=800"
            />
            <CardBody>
              <CardTitle tag="h5">Card Title 1</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                $699,999 4 bds| 3 ba| 2,000 sqft| - House for sale
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="suggestion_card2">
            <img
              alt="Sample"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfurKO-LNP42dO5x3MJPBpCZ5fuax0TfGTQQ&usqp=CAU"
            />
            <CardBody>
              <CardTitle tag="h5">Card title 2</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                $999,999 1 bd| 1 ba| 500 sqft| - Condo for sale
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="suggestion_card3">
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title 3</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                $1,999,999 3 bds| 2.5 ba| 1,200 sqft| - Apartment for sale
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </Slider>
    </div>
  )
}
export default Home
