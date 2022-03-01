import { locations } from '../assets';

export function getDistricts() {
  const districts = [];

  locations.forEach((location) => {
    districts.push(location.district);
  });

  return districts;
}
