import locations from '../assets/static/locations.json';

export const useLocations = () => {
  const functions = {};

  /** Get the division list
   * @returns {{label: string, value: string}[]}
   */
  functions.getDivisions = function () {
    const divisions = [];
    for (const location of locations) {
      divisions.push({ label: location.division, value: locations.division });
    }
    return divisions;
  };

  /** Get the districts of a division
   * @param {string} division
   * @returns {{label: string, value: string}[]}
   */
  functions.getDistricts = function (division) {
    const districts = [];
    for (const location of locations) {
      if (division === location.division) {
        for (const district of location.districts) {
          districts.push({
            label: district.name,
            value: district.name,
          });
        }
      }
    }
    return districts;
  };

  /** Get the upazilas of a district
   * @param {string} district
   * @returns {{label: string, value: string}[]}
   */
  functions.getUpazilas = function (district) {
    const upazilas = [];
    for (const location of locations) {
      for (const dis of location.districts) {
        if (dis.name === district) {
          for (const upazila of dis.upazilas) {
            upazilas.push({ label: upazila, value: upazila });
          }
        }
      }
    }
    return upazilas;
  };

  return { ...functions };
};
