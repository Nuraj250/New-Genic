export class DataToCart {

  public data: any;
  setData(data: any, _j: string | number): any {
    this.data = data;
    let dataArray = {
      'isbn': this.data[_j].isbn,
      'title': this.data[_j].title,
      'price': this.data[_j].price,
      'cover': this.data[_j].cover
    };
    return dataArray;
  }
}
