import axios from 'axios';

interface PlaceCategory {
  alias: string;
  title: string;
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Location {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets: string;
}

export interface Place {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: PlaceCategory[];
  rating: number;
  coordinates: Coordinate;
  transactions: string[];
  price: string;
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

function requestFactory() {
  const request = axios.create({
    baseURL: 'http://localhost:3001',
  });

  request.interceptors.request.use((config) => {
    console.info(`requesting: ${config.url}`, config);
    return config;
  });
  request.interceptors.response.use((response) => {
    console.info(`request completed: ${response.config.url}`, response);
    return response;
  });

  return request;
}

const request = requestFactory();


export default async function fetchIceCreamBestPlaces() {
  try {
    const { data } = await request.get<Place[]>('api/icecream/best-rated');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
