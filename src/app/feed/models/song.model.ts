export interface Song {
  id?: number;
  name: string;
  time?: string;
  artist?: string;
  album?: string;
  [key: string]: any;
}
