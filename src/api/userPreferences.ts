export const saveFavorites = async (userId: number, favorites: number[]) => {
  await fetch(`http://localhost:4000/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        favorites
    }),
  });
}

export const getUserFavorites = async (userId: number): Promise<number[]> => {
  const response = await fetch(`http://localhost:4000/users/${userId}`);
  const data = await response.json();
  return data.favorites;
}