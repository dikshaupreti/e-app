import Product from '../models/Product';

class ProductService {
  private apiUrl: string = 'https://fakestoreapi.com/products';

  async fetchProducts(): Promise<Product[]> {
    const response = await fetch(this.apiUrl);
    const products = await response.json();
    return products;
  }

  
}
const productServiceInstance = new ProductService();
export default productServiceInstance;