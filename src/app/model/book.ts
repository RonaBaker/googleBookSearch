export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
}

export interface BookItem {
    items: Book[];
}

interface VolumeInfo {
    title: string;
    authors: string[];
    imageLinks: ImageLinks;
    publisher: string;
    publishedDate: string;
    pageCount: number;
    categories: string[];
}

interface ImageLinks {
    thumbnail: string;
  }




















