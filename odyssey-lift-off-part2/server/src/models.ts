
/**
 * We need to provide the model for what the API that populates
 * this data returns so it will be correctly typed when we run 
 * the "generate" script
 */ 

export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};
