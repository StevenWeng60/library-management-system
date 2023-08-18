export interface BookCheckout {
  id: Number;
  title: String;
  checkoutDate: String;
  returnDate?: String;
  dueDate: String;
  bookId?: Number;
  userId?: Number;
}