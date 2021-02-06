export class Cart {
  product_list: [{
    product_id: string| undefined;
    product_code: string| undefined;
    name: string| undefined;
    description: string| undefined;
    color: string| undefined;
    weight: string| undefined;
    sale_price: number| undefined;
    retail_price: number| undefined;
    isFreeShipping: boolean| undefined;
    qty: number| undefined;
    qtyPrice?: number| undefined;
  }] | undefined;
  totalWeight: number| undefined;
  totalProductPrice: number| undefined;
}
