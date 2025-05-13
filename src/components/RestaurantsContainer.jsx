import Restaurant from "./Restaurant.jsx";
import { useRestaurants } from '../context/RestaurantContext.jsx';

function RestaurantsContainer() {
  
  const {restaurants} = useRestaurants();

  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
