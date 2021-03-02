import axios from "axios";

// Axios Create Instance
const instance = axios.create({
  baseURL: "https://covid-cors.herokuapp.com/https://api.covid19tracker.ca",
});

// List of Country and Provinces
const provinces = [
  {
    Code: "AB",
    coordinates: [55.078367, -114.58195],
    Name: "Alberta",
    healthRegions: [
      {
        hr_uid: 4831,
        province: "AB",
        engname: "South Zone",
        frename: "South Zone",
      },
      {
        hr_uid: 4832,
        province: "AB",
        engname: "Calgary Zone",
        frename: "Calgary Zone",
      },
      {
        hr_uid: 4833,
        province: "AB",
        engname: "Central Zone",
        frename: "Central Zone",
      },
      {
        hr_uid: 4834,
        province: "AB",
        engname: "Edmonton Zone",
        frename: "Edmonton Zone",
      },
      {
        hr_uid: 4835,
        province: "AB",
        engname: "North Zone",
        frename: "North Zone",
      },
    ],
  },
  {
    Code: "BC",
    coordinates: [54.622978, -125.135867],
    Name: "British Columbia",
    healthRegions: [
      {
        hr_uid: 591,
        province: "BC",
        engname: "Fraser Health",
        frename: "Fraser Health",
      },
      {
        hr_uid: 592,
        province: "BC",
        engname: "Interior Health",
        frename: "Interior Health",
      },
      {
        hr_uid: 593,
        province: "BC",
        engname: "Vancouver Island Health",
        frename: "Vancouver Island Health",
      },
      {
        hr_uid: 594,
        province: "BC",
        engname: "Northern Health",
        frename: "Northern Health",
      },
      {
        hr_uid: 595,
        province: "BC",
        engname: "Vancouver  Coastal Health",
        frename: "Vancouver  Coastal Health",
      },
    ],
  },
  {
    Code: "MB",
    coordinates: [54.977614, -97.695682],
    Name: "Manitoba",
    healthRegions: [
      {
        hr_uid: 4601,
        province: "MB",
        engname: "Winnipeg Regional Health Authority",
        frename: "Office régional de la santé de Winnipeg",
      },
      {
        hr_uid: 4602,
        province: "MB",
        engname: "Prairie Mountain Health",
        frename: "Santé de Prairie Mountain",
      },
      {
        hr_uid: 4603,
        province: "MB",
        engname: "Interlake-Eastern Regional Health Authority",
        frename: "Office régional de la santé d'Entre-les-Lacs et de l'Est",
      },
      {
        hr_uid: 4604,
        province: "MB",
        engname: "Northern Regional Health Authority",
        frename: "Office régional de la santé du Nord",
      },
      {
        hr_uid: 4605,
        province: "MB",
        engname: "Southern Health—Santé Sud",
        frename: "Southern Health—Santé Sud",
      },
    ],
  },
  {
    Code: "NB",
    coordinates: [45.945278, -66.666667],
    Name: "New Brunswick",
    healthRegions: [
      {
        hr_uid: 1301,
        province: "NB",
        engname: "Zone 1 (Moncton area)",
        frename: "Zone 1 (région de Moncton)",
      },
      {
        hr_uid: 1302,
        province: "NB",
        engname: "Zone 2 (Saint John area)",
        frename: "Zone 2 (région de Saint John)",
      },
      {
        hr_uid: 1303,
        province: "NB",
        engname: "Zone 3 (Fredericton area)",
        frename: "Zone 3 (région de Fredericton)",
      },
      {
        hr_uid: 1304,
        province: "NB",
        engname: "Zone 4 (Edmundston area)",
        frename: "Zone 4 (région d'Edmundston)",
      },
      {
        hr_uid: 1305,
        province: "NB",
        engname: "Zone 5 (Campbellton area)",
        frename: "Zone 5 (région de Campbellton)",
      },
      {
        hr_uid: 1306,
        province: "NB",
        engname: "Zone 6 (Bathurst area)",
        frename: "Zone 6 (région de Bathurst)",
      },
      {
        hr_uid: 1307,
        province: "NB",
        engname: "Zone 7 (Miramichi area)",
        frename: "Zone 7 (région de Miramichi)",
      },
    ],
  },
  {
    Code: "NL",
    coordinates: [48.516604, -56.007709],
    Name: "Newfoundland and Labrador",
    healthRegions: [
      {
        hr_uid: 1011,
        province: "NL",
        engname: "Eastern Regional Health Authority",
        frename: "Eastern Regional Health Authority",
      },
      {
        hr_uid: 1012,
        province: "NL",
        engname: "Central Regional Health Authority",
        frename: "Central Regional Health Authority",
      },
      {
        hr_uid: 1013,
        province: "NL",
        engname: "Western Regional Health Authority",
        frename: "Western Regional Health Authority",
      },
      {
        hr_uid: 1014,
        province: "NL",
        engname: "Labrador-Grenfell Regional Health Authority",
        frename: "Labrador-Grenfell Regional Health Authority",
      },
    ],
  },
  {
    Code: "NS",
    coordinates: [44.646244, -63.573566],
    Name: "Nova Scotia",
    healthRegions: [
      {
        hr_uid: 1201,
        province: "NS",
        engname: "Zone 1 - Western",
        frename: "Zone 1 - Western",
      },
      {
        hr_uid: 1202,
        province: "NS",
        engname: "Zone 2 - Northern",
        frename: "Zone 2 - Northern",
      },
      {
        hr_uid: 1203,
        province: "NS",
        engname: "Zone 3 - Eastern",
        frename: "Zone 3 - Eastern",
      },
      {
        hr_uid: 1204,
        province: "NS",
        engname: "Zone 4 - Central",
        frename: "Zone 4 - Central",
      },
    ],
  },
  {
    Code: "NT",
    coordinates: [64.396938, -119.946857],
    Name: "Northwest Territories",
    healthRegions: [
      {
        hr_uid: 6101,
        province: "NT",
        engname: "Northwest Territories",
        frename: "Territoires du Nord-Ouest",
      },
    ],
  },
  {
    Code: "NU",
    coordinates: [65.730626, -94.793355],
    Name: "Nunavat",
    healthRegions: [
      {
        hr_uid: 6201,
        province: "NU",
        engname: "Nunavut",
        frename: "Nunavut",
      },
    ],
  },
  {
    Code: "ON",
    coordinates: [51.069017, -85.646627],
    Name: "Ontario",
    healthRegions: [
      {
        hr_uid: 3526,
        province: "ON",
        engname: "The District of Algoma Health Unit",
        frename: "Circonscription sanitaire du district d'Algoma",
      },
      {
        hr_uid: 3527,
        province: "ON",
        engname: "Brant County Health Unit",
        frename: "Circonscription sanitaire du comté de Brant",
      },
      {
        hr_uid: 3530,
        province: "ON",
        engname: "Durham Regional Health Unit",
        frename: "Circonscription sanitaire régionale de Durham",
      },
      {
        hr_uid: 3533,
        province: "ON",
        engname: "Grey Bruce Health Unit",
        frename: "Circonscription sanitaire de Grey Bruce",
      },
      {
        hr_uid: 3534,
        province: "ON",
        engname: "Haldimand-Norfolk Health Unit",
        frename: "Circonscription sanitaire de Haldimand-Norfolk",
      },
      {
        hr_uid: 3535,
        province: "ON",
        engname: "Haliburton, Kawartha, Pine Ridge District Health Unit",
        frename:
          "Circonscription sanitaire du district de Haliburton, Kawartha et Pine Ridge",
      },
      {
        hr_uid: 3536,
        province: "ON",
        engname: "Halton Regional Health Unit",
        frename: "Circonscription sanitaire régionale de Halton",
      },
      {
        hr_uid: 3537,
        province: "ON",
        engname: "City of Hamilton Health Unit",
        frename: "Circonscription sanitaire de la cité de Hamilton",
      },
      {
        hr_uid: 3538,
        province: "ON",
        engname: "Hastings and Prince Edward Counties Health Unit",
        frename:
          "Circonscription sanitaire des comtés de Hastings et Prince Edward",
      },
      {
        hr_uid: 3539,
        province: "ON",
        engname: "Huron Perth Public Health Unit",
        frename: "Circonscription sanitaire du comté de Huron Perth",
      },
      {
        hr_uid: 3540,
        province: "ON",
        engname: "Chatham-Kent Health Unit",
        frename: "Circonscription sanitaire de Chatham-Kent",
      },
      {
        hr_uid: 3541,
        province: "ON",
        engname: "Kingston, Frontenac and Lennox and Addington Health Unit",
        frename:
          "Circonscription sanitaire de Kingston, Frontenac et Lennox et Addington",
      },
      {
        hr_uid: 3542,
        province: "ON",
        engname: "Lambton Health Unit",
        frename: "Circonscription sanitaire de Lambton",
      },
      {
        hr_uid: 3543,
        province: "ON",
        engname: "Leeds, Grenville and Lanark District Health Unit",
        frename:
          "Circonscription sanitaire du district de Leeds, Grenville et Lanark",
      },
      {
        hr_uid: 3544,
        province: "ON",
        engname: "Middlesex-London Health Unit",
        frename: "Circonscription sanitaire de Middlesex-London",
      },
      {
        hr_uid: 3546,
        province: "ON",
        engname: "Niagara Regional Area Health Unit",
        frename: "Circonscription sanitaire régionale de Niagara",
      },
      {
        hr_uid: 3547,
        province: "ON",
        engname: "North Bay Parry Sound District Health Unit",
        frename:
          "Circonscription sanitaire du district de North Bay Parry Sound",
      },
      {
        hr_uid: 3549,
        province: "ON",
        engname: "Northwestern Health Unit",
        frename: "Circonscription sanitaire du Nord-Ouest",
      },
      {
        hr_uid: 3551,
        province: "ON",
        engname: "City of Ottawa Health Unit",
        frename: "Circonscription sanitaire de la ville d'Ottawa",
      },
      {
        hr_uid: 3553,
        province: "ON",
        engname: "Peel Regional Health Unit",
        frename: "Circonscription sanitaire régionale de Peel",
      },
      {
        hr_uid: 3555,
        province: "ON",
        engname: "Peterborough County–City Health Unit",
        frename:
          "Circonscription sanitaire du comté et de la cité de Peterborough",
      },
      {
        hr_uid: 3556,
        province: "ON",
        engname: "Porcupine Health Unit",
        frename: "Circonscription sanitaire de Porcupine",
      },
      {
        hr_uid: 3557,
        province: "ON",
        engname: "Renfrew County and District Health Unit",
        frename: "Circonscription sanitaire du comté et du district de Renfrew",
      },
      {
        hr_uid: 3558,
        province: "ON",
        engname: "The Eastern Ontario Health Unit",
        frename: "Circonscription sanitaire de l'Est de l'Ontario",
      },
      {
        hr_uid: 3560,
        province: "ON",
        engname: "Simcoe Muskoka District Health Unit",
        frename: "Circonscription sanitaire du district de Simcoe Muskoka",
      },
      {
        hr_uid: 3561,
        province: "ON",
        engname: "Sudbury and District Health Unit",
        frename: "Circonscription sanitaire de Sudbury et son district",
      },
      {
        hr_uid: 3562,
        province: "ON",
        engname: "Thunder Bay District Health Unit",
        frename: "Circonscription sanitaire du district de Thunder Bay",
      },
      {
        hr_uid: 3563,
        province: "ON",
        engname: "Timiskaming Health Unit",
        frename: "Circonscription sanitaire de Timiskaming",
      },
      {
        hr_uid: 3565,
        province: "ON",
        engname: "Waterloo Health Unit",
        frename: "Circonscription sanitaire de Waterloo",
      },
      {
        hr_uid: 3566,
        province: "ON",
        engname: "Wellington-Dufferin-Guelph Health Unit",
        frename: "Circonscription sanitaire de Wellington-Dufferin-Guelph",
      },
      {
        hr_uid: 3568,
        province: "ON",
        engname: "Windsor-Essex County Health Unit",
        frename: "Circonscription sanitaire de Windsor-comté d'Essex",
      },
      {
        hr_uid: 3570,
        province: "ON",
        engname: "York Regional Health Unit",
        frename: "Circonscription sanitaire régionale de York",
      },
      {
        hr_uid: 3575,
        province: "ON",
        engname: "Southwestern Public Health Unit",
        frename: "Circonscription sanitaire du sud-ouest",
      },
      {
        hr_uid: 3595,
        province: "ON",
        engname: "City of Toronto Health Unit",
        frename: "Circonscription sanitaire de la cité de Toronto",
      },
    ],
  },
  {
    Code: "PE",
    coordinates: [46.240278, -63.134722],
    Name: "Prince Edward Island",
    healthRegions: [
      {
        hr_uid: 1100,
        province: "PE",
        engname: "Prince Edward Island",
        frename: "Île-du-Prince-Édouard",
      },
    ],
  },
  {
    Code: "QC",
    coordinates: [53.435719, -71.926534],
    Name: "Quebec",
    healthRegions: [
      {
        hr_uid: 2401,
        province: "QC",
        engname: "Région du Bas-Saint-Laurent",
        frename: "Région du Bas-Saint-Laurent",
      },
      {
        hr_uid: 2402,
        province: "QC",
        engname: "Région du Saguenay—Lac-Saint-Jean",
        frename: "Région du Saguenay—Lac-Saint-Jean",
      },
      {
        hr_uid: 2403,
        province: "QC",
        engname: "Région de la Capitale-Nationale",
        frename: "Région de la Capitale-Nationale",
      },
      {
        hr_uid: 2404,
        province: "QC",
        engname: "Région de la Mauricie et du Centre-du-Québec",
        frename: "Région de la Mauricie et du Centre-du-Québec",
      },
      {
        hr_uid: 2405,
        province: "QC",
        engname: "Région de l'Estrie",
        frename: "Région de l'Estrie",
      },
      {
        hr_uid: 2406,
        province: "QC",
        engname: "Région de Montréal",
        frename: "Région de Montréal",
      },
      {
        hr_uid: 2407,
        province: "QC",
        engname: "Région de l'Outaouais",
        frename: "Région de l'Outaouais",
      },
      {
        hr_uid: 2408,
        province: "QC",
        engname: "Région de l'Abitibi-Témiscamingue",
        frename: "Région de l'Abitibi-Témiscamingue",
      },
      {
        hr_uid: 2409,
        province: "QC",
        engname: "Région de la Côte-Nord",
        frename: "Région de la Côte-Nord",
      },
      {
        hr_uid: 2410,
        province: "QC",
        engname: "Région du Nord-du-Québec",
        frename: "Région du Nord-du-Québec",
      },
      {
        hr_uid: 2411,
        province: "QC",
        engname: "Région de la Gaspésie—Îles-de-la-Madeleine",
        frename: "Région de la Gaspésie—Îles-de-la-Madeleine",
      },
      {
        hr_uid: 2412,
        province: "QC",
        engname: "Région de la Chaudière-Appalaches",
        frename: "Région de la Chaudière-Appalaches",
      },
      {
        hr_uid: 2413,
        province: "QC",
        engname: "Région de Laval",
        frename: "Région de Laval",
      },
      {
        hr_uid: 2414,
        province: "QC",
        engname: "Région de Lanaudière",
        frename: "Région de Lanaudière",
      },
      {
        hr_uid: 2415,
        province: "QC",
        engname: "Région des Laurentides",
        frename: "Région des Laurentides",
      },
      {
        hr_uid: 2416,
        province: "QC",
        engname: "Région de la Montérégie",
        frename: "Région de la Montérégie",
      },
      {
        hr_uid: 2417,
        province: "QC",
        engname: "Région du Nunavik",
        frename: "Région du Nunavik",
      },
      {
        hr_uid: 2418,
        province: "QC",
        engname: "Région des Terres-Cries-de-la-Baie-James",
        frename: "Région des Terres-Cries-de-la-Baie-James",
      },
    ],
  },
  {
    Code: "SK",
    coordinates: [54.876607, -105.523171],
    Name: "Saskatchewan",
    healthRegions: [
      {
        hr_uid: 471,
        province: "SK",
        engname: "Far North",
        frename: "Far North",
      },
      { hr_uid: 472, province: "SK", engname: "North", frename: "North" },
      { hr_uid: 473, province: "SK", engname: "Central", frename: "Central" },
      {
        hr_uid: 474,
        province: "SK",
        engname: "Saskatoon",
        frename: "Saskatoon",
      },
      { hr_uid: 475, province: "SK", engname: "Regina", frename: "Regina" },
      { hr_uid: 476, province: "SK", engname: "South", frename: "South" },
    ],
  },
  {
    Code: "YT",
    coordinates: [63.273182, -135.337987],
    Name: "Yukon",
    healthRegions: [
      {
        hr_uid: 6001,
        province: "YT",
        engname: "Yukon",
        frename: "Yukon",
      },
    ],
  },
];
// MAPBOX KEY

const mapboxKey =
  "pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw";

export { instance, mapboxKey, provinces };
