import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, current_user }) => {
    const apartmentProtectedIndex = apartments?.filter(apartment => current_user?.id === apartment.user_id)
  return (
    <>
      <main>
        {apartments?.map((apartment, index) => {
          return (
            <Card
              className="card"
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">{apartment.street}</CardTitle>
                <CardSubtitle>
                  {apartment.city}, {apartment.state}
                </CardSubtitle>
                <CardSubtitle>Price: ${apartment.price}</CardSubtitle>

                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  Show listing
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </main>
    </>
  )
}

export default ApartmentProtectedIndex
