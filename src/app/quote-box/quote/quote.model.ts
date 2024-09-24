export interface QuoteType {
    id: number;
    tagId: number; // Reference to the Tag ID
    author: string;
    quote: string;
}

export interface newQuoteType{
    author: string;
    quote: string;
}