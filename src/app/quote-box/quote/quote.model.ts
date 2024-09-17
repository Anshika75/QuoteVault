export interface Quote {
    id: number;
    tagId: number; // Reference to the Tag ID
    author: string;
    text: string;
  }