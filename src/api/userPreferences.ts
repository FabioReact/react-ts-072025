export const saveFavorites = async () => {
  await fetch('http://localhost:4000/users/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        favorites: [1, 2]
    }),
  });
}