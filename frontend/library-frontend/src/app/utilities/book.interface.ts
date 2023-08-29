export interface Book {
  id: number;
  checkoutId?: number;
  title: string;
  authorFirstName: string;
  authorLastName: string;
  genre: string;
  releaseDate: string;
  copiesAvailable: number;
  checkInDate?: string;
  checkOutDate?: string;
}
