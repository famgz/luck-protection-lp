import { useState } from 'react';

const useFavorites = () => {
  const localstorageKey = 'luck-protection-favorites';

  // Initialize state to store favorite products
  const [favorites, setFavorites] = useState<string[]>(
    getFavoritesFromLocalStorage()
  );

  function refreshFavorites() {
    setFavorites(getFavoritesFromLocalStorage());
  }

  // Function to get favorites from localStorage
  function getFavoritesFromLocalStorage(): string[] {
    const storedFavorites = localStorage.getItem(localstorageKey);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  // Function to update favorites in localStorage
  function updateLocalStorage(favorites: string[]) {
    localStorage.setItem(localstorageKey, JSON.stringify(favorites));
  }

  // Function to check if a product is marked as favorite
  const isFavorite = (productSlug: string): boolean => {
    return favorites.includes(productSlug);
  };

  // Function to toggle the favorite status of a product
  const toggleFavorite = (productSlug: string): void => {
    let updatedFavorites: string[];

    if (isFavorite(productSlug)) {
      // Remove from favorites
      updatedFavorites = favorites.filter((id) => id !== productSlug);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, productSlug];
    }

    // Update state and localStorage
    updateLocalStorage(updatedFavorites);
    refreshFavorites();
  };

  return { favorites, isFavorite, toggleFavorite };
};

export default useFavorites;
