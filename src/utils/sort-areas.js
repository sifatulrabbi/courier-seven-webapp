import { locations } from '../assets';

export function sortAreas(district) {
  if (!district) return [];

  const obj = locations.find((location) => {
    return location.district === district;
  });

  return obj.areas ? obj.areas : [];
}
