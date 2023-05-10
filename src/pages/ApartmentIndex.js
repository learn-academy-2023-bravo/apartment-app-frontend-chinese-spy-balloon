import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../App.css'

const ApartmentIndex = ({ apartments }) => {

    return (
        <main>
            {apartments?.map((apartment, index) => {
                return(
                <Card
                className="card"
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt="Sample"
                    src={apartment.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {apartment.street}
                    </CardTitle>
                    <CardSubtitle>
                        {apartment.city}, {apartment.state}
                    </CardSubtitle>
                    <CardSubtitle>
                        Price: ${apartment.price}
                    </CardSubtitle>

                    <NavLink to={`/apartmentshow/${apartment.id}`}>
                    Show listing
                    </NavLink>
                </CardBody>
                </Card>
            )})}
        </main>
    )
}

export default ApartmentIndex