export type Movie = {
  id: number;
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Metascore: string;
  Response: boolean;
  Images: string[];
  Country: string;
  Language: string;
  Awards: string;
  Released: string;
  Writers: string;
  Runtime: string;
  totalSeasons?: string;
  ComingSoon?: boolean;
  Rated: string;
};

export type MovieData = {
  data: Movie[];
};

export type QRData = {
  message: string;
  data: string;
};