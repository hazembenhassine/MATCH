import {Category} from './Category';

export interface Candidate {
  _id: string;
  qualities: string[];
  fname: string;
  lname: string;
  position: string;
  email: string;
  tel1: string;
  tel2: string;
  facebook_url: string;
  linkedin_url: string;
  twitter_url: string;
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
  job_histories: Job[];
  category: Category;
  user_img: string;
}

export interface Job {
  _id: string;
  date: string;
  description: string;
}
