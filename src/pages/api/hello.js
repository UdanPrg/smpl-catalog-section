export async function getDataAPI(){
  const res = await fetch('https://fakestoreapi.com/products?limit=7');
  return res.json();
}