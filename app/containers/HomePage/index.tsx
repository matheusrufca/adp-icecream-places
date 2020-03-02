/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import PlaceInfo, { PlaceInfoModel } from 'components/PlaceInfo/PlaceInfo';
import React, { useEffect, useState } from 'react';
import fetchIceCreamBestPlaces, { Place } from 'resources/api/icecreams';

function placeInfoAdapter({
  id,
  name,
  rating,
  is_closed,
  image_url,
  url,
  price,
  phone,
  location,
  review_count,
}: Place): PlaceInfoModel {
  const target: PlaceInfoModel = {
    id,
    name,
    rating,
    url: url,
    price: price,
    phone: phone,
    reviewCount: review_count,
    imageUrl: image_url,
    isOpen: !is_closed,
    location: {
      displayAddress: location.display_address[0],
      zipCode: location.zip_code,
      city: location.city,
      state: location.state,
      country: location.country,
    },
  };
  return target;
}

export default function HomePage() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    try {
      fetchIceCreamBestPlaces().then((places) => {
        setPlaces(places);
      });

    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <main>
        <section>
          {
            places && places.length && places
              .map(placeInfoAdapter)
              .map((place) => (<PlaceInfo key={place.id} data={place} />))
          }
        </section>
      </main>
    </>
  );
}
