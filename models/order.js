import * as moment from "moment";
class Order {
  constructor(id, items, totalAmount, date) {
    (this.id = id),
      (this.totalAmount = totalAmount),
      (this.items = items),
      (this.date = date);
  }

  get readableDate() {
    return this.date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    // return moment(this.date).format("MMMM Do YYYY, h:mm:ss a"); // May 3rd 2021, 5:15:55 pm
  }
}

export default Order;
