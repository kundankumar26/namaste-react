export const filterRestaurants = (searchText, restaurants) => {
    if (searchText.length === 0) return restaurants;
    return restaurants.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
};