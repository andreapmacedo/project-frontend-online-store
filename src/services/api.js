export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const itemName = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const itemCategory = async (categoryId) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const itemCategoryAndName = async (categoryId, query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const itemDetails = async (productId) => {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const data = await itemCategoryAndName(categoryId, query);
    return data;
  }

  if (categoryId && !query) {
    const data = await itemCategory(categoryId);
    return data;
  }

  if (!categoryId && query) {
    const data = await itemName(query);
    return data;
  }
}

// export async function getProductsFromCategoryAndQuery(categoryId = '$CATEGORY_ID', query = '$QUERY') {
//   const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }
