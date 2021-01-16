export class Product {

  public data: any;

  setProduct(data: any) {
    this.data = data;
    const dataModel = {
      'item_id': data.item_id,
      'product_code': data.product_code,
      'name': data.name,
      'description': data.description,
      'stock': data.stock,
      'color': data.color,
      'size': data.size,
      'gender': data.gender,
      'type': data.type,


      'buying_price': data.buying_price,
      'sale_price': data.sale_price,
      'retail_price': data.retail_price,

      'added_date': data.added_date
    };
    return dataModel;
  }
}

