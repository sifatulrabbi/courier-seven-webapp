import locations from '../assets/static/locations.json';

export const useLocations = () => {
  const functions = {};

  functions.districts = function () {
    let districts = locations.map((location) => location.district);
    districts = districts.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    return districts;
  };

  functions.divisions = function () {
    let divisions = locations.map((location) => ({
      label: location.division,
      value: location.division,
    }));
    divisions = divisions.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    return divisions;
  };

  functions.upazilas = function () {
    const upazilas = locations.map((location) => location.upazila);
    return upazilas;
  };

  functions.districtsByDivision = function (division) {
    let districts = [];
    locations.forEach((location) => {
      if (location.division === division) {
        districts.push(location.district);
      }
    });
    districts = districts.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    return districts;
  };

  functions.upazilasByDistrict = function (district) {
    const upazilas = [];
    locations.forEach((location) => {
      if (location.district === district) {
        upazilas.push(location.upazila);
      }
    });
    upazilas.sort();
    return upazilas;
  };

  return { ...functions };
};
