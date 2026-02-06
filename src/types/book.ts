export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  firstEditionDate: string;
  rating: number;
  readDate: string;
  memo: string;
  genre: string;
  tags: string[];
  pageCount: number;
  coverImage: string;
  status: "read" | "want_to_read";
};
