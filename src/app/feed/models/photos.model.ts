export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
}

export interface Tag {
  title: string;
}

export interface PhotoTag {
  title: string;
}

export interface Photos {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  description?: any;
  urls: Urls;
  links: Links;
  categories: any[];
  sponsored: boolean;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  slug?: any;
  user: User;
  tags: Tag[];
  photo_tags: PhotoTag[];
}
