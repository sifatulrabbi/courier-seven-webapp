import locations from '../assets/static/locations.json';

export const useLocations = () => {
  const functions = {};

  /** Get the districts of a division
   * @param {string} division
   * @returns {{label: string, value: string}[]}
   */
  functions.getDistricts = function () {
    const districts = [];
    for (const district of locations) {
      districts.push({
        label: district.name,
        value: district.name,
      });
    }
    return districts;
  };

  /** Get the upazilas of a district
   * @param {string} district
   * @returns {{label: string, value: string}[]}
   */
  functions.getUpazilas = function (district) {
    const upazilas = [];
    for (const dis of locations) {
      if (dis.name === district) {
        for (const upazila of dis.upazilas) {
          upazilas.push({ label: upazila, value: upazila });
        }
      }
    }
    return upazilas;
  };

  return { ...functions };
};

/*  
Adabar Thana
Badda Thana
Bangsal Thana
Bimanbandar Thana (Dhaka)
Cantonment Thana
Chowkbazar Thana
Darus Salam Thana
Demra Thana
Dhanmondi Thana
Gendaria Thana
Gulshan Thana
Hazaribagh Thana
Jatrabari Thana
Kadamtali Thana
Kafrul Thana
Kalabagan
Kamrangirchar Thana
Khilgaon Thana
Khilkhet Thana
Kotwali Thana (Dhaka)
Lalbagh Thana
Mirpur Model Thana
Mohammadpur Thana
Motijheel Thana
New Market Thana
Pallabi Thana
Paltan
Panthapath
Ramna Thana
Rampura Thana
Sabujbagh Thana
Shah Ali Thana
Shahbag
Sher-e-Bangla Nagar
Shyampur Thana
Sutrapur Thana
Tejgaon Industrial Area Thana
Tejgaon Thana
Turag Thana
Uttar Khan Thana
Vatara Thana
Wari Thana
*/
