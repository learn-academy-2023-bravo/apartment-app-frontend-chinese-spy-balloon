import { useParams, NavLink } from "react-router-dom"

const ApartmentShow = ({ apartments, current_user }) => {
  const { id } = useParams()
  let selectedApartment = apartments?.find((apartment) => apartment.id === +id)

  return (
    <main className="apartment_description">
      {selectedApartment && (
        <>
          <img
            className="apartment-image"
            alt="apartment pic"
            src={selectedApartment.image}
          />
          <section className="show_text">
            <h3>{selectedApartment.street}</h3>
            <h5>
              {selectedApartment.city}
              {selectedApartment.state}
            </h5>
            <h5>Description: {selectedApartment.description}</h5>
          </section>
        </>
      )}
      {current_user && (
        <NavLink
          to={`/apartmentedit/${selectedApartment.id}`}
          className="nav-link"
        >
          Edit Listing
        </NavLink>
      )}
    </main>
  )
}

export default ApartmentShow
