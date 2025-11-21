// src/mockData.js
// Mock data for 28 districts of Chhattisgarh with real-time sky monitoring data

export const cities = [
  {
    id: "raipur",
    name: "Raipur",
    coords: [21.25, 81.63],
    starVisibility: 62,
    cloudCover: 18,
    lightPollution: 6.2,
    temperature: 22,
    humidity: 58,
    history: {
      starVisibility: [
        62, 60, 59, 58, 61, 63, 64, 62, 60, 59, 58, 57, 56, 57, 59, 61, 62, 63,
        65, 68, 70, 69, 67, 62,
      ],
      cloudCover: [
        18, 20, 22, 21, 19, 18, 16, 15, 14, 15, 16, 18, 20, 22, 21, 19, 18, 17,
        16, 15, 14, 13, 12, 18,
      ],
      lightPollution: [
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      ],
    },
  },
  {
    id: "durg",
    name: "Durg",
    coords: [21.18, 81.27],
    starVisibility: 68,
    cloudCover: 22,
    lightPollution: 5.9,
    temperature: 23,
    humidity: 65,
    history: {
      starVisibility: [
        68, 67, 66, 65, 66, 67, 68, 69, 68, 67, 66, 65, 64, 65, 66, 67, 68, 69,
        69, 70, 68, 67, 66, 68,
      ],
      cloudCover: [
        22, 23, 24, 22, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 19, 20, 21, 22,
        23, 22, 21, 20, 21, 22,
      ],
      lightPollution: [
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
      ],
    },
  },
  {
    id: "bilaspur",
    name: "Bilaspur",
    coords: [22.08, 82.15],
    starVisibility: 74,
    cloudCover: 10,
    lightPollution: 4.8,
    temperature: 20,
    humidity: 52,
    history: {
      starVisibility: [
        74, 73, 72, 71, 72, 74, 75, 74, 73, 72, 71, 70, 69, 70, 71, 72, 73, 74,
        76, 77, 78, 77, 75, 74,
      ],
      cloudCover: [
        10, 12, 11, 10, 9, 8, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6,
        6, 7, 8, 10,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "raigarh",
    name: "Raigarh",
    coords: [22.23, 83.4],
    starVisibility: 71,
    cloudCover: 14,
    lightPollution: 4.3,
    temperature: 21,
    humidity: 54,
    history: {
      starVisibility: [
        71, 70, 72, 71, 70, 71, 72, 71, 70, 69, 68, 69, 70, 71, 72, 73, 74, 73,
        72, 71, 70, 69, 68, 71,
      ],
      cloudCover: [
        14, 15, 14, 13, 12, 13, 14, 13, 12, 12, 13, 14, 15, 14, 13, 12, 11, 12,
        13, 14, 13, 12, 13, 14,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "korba",
    name: "Korba",
    coords: [22.33, 82.67],
    starVisibility: 69,
    cloudCover: 16,
    lightPollution: 4.7,
    temperature: 24,
    humidity: 50,
    history: {
      starVisibility: [
        69, 68, 69, 68, 67, 68, 69, 70, 71, 70, 69, 68, 67, 66, 67, 68, 69, 70,
        71, 70, 69, 68, 67, 69,
      ],
      cloudCover: [
        16, 15, 16, 17, 16, 15, 16, 17, 16, 15, 16, 15, 14, 13, 14, 15, 16, 15,
        14, 15, 16, 15, 14, 16,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "rajnandgaon",
    name: "Rajnandgaon",
    coords: [21.95, 81.03],
    starVisibility: 70,
    cloudCover: 14,
    lightPollution: 4.0,
    temperature: 21,
    humidity: 56,
    history: {
      starVisibility: [
        70, 69, 68, 69, 70, 71, 70, 69, 68, 67, 66, 65, 66, 67, 68, 69, 70, 71,
        72, 71, 70, 69, 68, 70,
      ],
      cloudCover: [
        14, 15, 14, 13, 12, 13, 14, 15, 14, 13, 12, 11, 12, 13, 14, 15, 14, 13,
        12, 11, 12, 13, 14, 14,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "dhamtari",
    name: "Dhamtari",
    coords: [21.43, 81.57],
    starVisibility: 65,
    cloudCover: 20,
    lightPollution: 5.2,
    temperature: 22,
    humidity: 60,
    history: {
      starVisibility: [
        65, 64, 63, 64, 65, 66, 65, 64, 63, 62, 61, 60, 61, 62, 63, 64, 65, 66,
        67, 66, 65, 64, 63, 65,
      ],
      cloudCover: [
        20, 19, 20, 21, 20, 19, 18, 19, 20, 21, 22, 21, 20, 19, 18, 19, 20, 21,
        20, 19, 18, 19, 20, 20,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "mahasamund",
    name: "Mahasamund",
    coords: [21.57, 82.25],
    starVisibility: 67,
    cloudCover: 17,
    lightPollution: 4.5,
    temperature: 22,
    humidity: 55,
    history: {
      starVisibility: [
        67, 66, 67, 66, 67, 68, 67, 66, 65, 64, 63, 64, 65, 66, 67, 68, 69, 68,
        67, 66, 65, 64, 63, 67,
      ],
      cloudCover: [
        17, 16, 15, 16, 17, 18, 17, 16, 15, 14, 13, 14, 15, 16, 17, 18, 17, 16,
        15, 14, 13, 14, 15, 17,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "balod",
    name: "Balod",
    coords: [21.47, 82.13],
    starVisibility: 64,
    cloudCover: 19,
    lightPollution: 5.0,
    temperature: 23,
    humidity: 61,
    history: {
      starVisibility: [
        64, 63, 62, 63, 64, 65, 64, 63, 62, 61, 60, 61, 62, 63, 64, 65, 66, 65,
        64, 63, 62, 61, 60, 64,
      ],
      cloudCover: [
        19, 18, 19, 20, 19, 18, 17, 16, 17, 18, 19, 20, 19, 18, 17, 16, 17, 18,
        19, 18, 17, 16, 17, 19,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "balodabazar",
    name: "Baloda Bazar",
    coords: [21.82, 81.75],
    starVisibility: 72,
    cloudCover: 12,
    lightPollution: 4.6,
    temperature: 21,
    humidity: 53,
    history: {
      starVisibility: [
        72, 71, 70, 71, 72, 73, 74, 73, 72, 71, 70, 69, 70, 71, 72, 73, 74, 73,
        72, 71, 70, 69, 68, 72,
      ],
      cloudCover: [
        12, 11, 12, 13, 12, 11, 10, 11, 12, 13, 12, 11, 10, 11, 12, 13, 12, 11,
        10, 11, 12, 11, 12, 12,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "janjgir-champa",
    name: "Janjgir-Champa",
    coords: [22.15, 82.28],
    starVisibility: 73,
    cloudCover: 11,
    lightPollution: 4.2,
    temperature: 22,
    humidity: 52,
    history: {
      starVisibility: [
        73, 72, 71, 72, 73, 74, 73, 72, 71, 70, 69, 70, 71, 72, 73, 74, 75, 74,
        73, 72, 71, 70, 69, 73,
      ],
      cloudCover: [
        11, 12, 11, 10, 11, 12, 11, 10, 11, 12, 11, 10, 11, 12, 11, 10, 11, 12,
        11, 10, 11, 12, 11, 11,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "jashpur",
    name: "Jashpur",
    coords: [22.8874, 84.1382], // ✔ Updated correct coordinates
    starVisibility: 78,
    cloudCover: 12,
    lightPollution: 3.6,
    temperature: 16,
    humidity: 54,
    history: {
      starVisibility: [
        78, 77, 76, 77, 78, 79, 80, 79, 78, 77, 76, 75, 76, 77, 78, 79, 80, 79,
        78, 77, 76, 75, 74, 78,
      ],
      cloudCover: [
        12, 12, 13, 12, 11, 12, 13, 12, 11, 10, 11, 12, 13, 12, 11, 10, 11, 12,
        11, 12, 13, 12, 11, 12,
      ],
      lightPollution: Array(24).fill(4),
    },
  },

  {
    id: "surajpur",
    name: "Surajpur",
    coords: [23.45, 83.1],
    starVisibility: 74,
    cloudCover: 12,
    lightPollution: 3.9,
    temperature: 18,
    humidity: 52,
    history: {
      starVisibility: [
        74, 73, 74, 73, 74, 75, 74, 73, 72, 71, 72, 73, 74, 75, 74, 73, 72, 71,
        70, 71, 72, 73, 72, 74,
      ],
      cloudCover: [
        12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11,
        12, 11, 12, 11, 12, 12,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "koriya",
    name: "Koriya",
    coords: [23.27, 83.42],
    starVisibility: 73,
    cloudCover: 11,
    lightPollution: 3.7,
    temperature: 18,
    humidity: 49,
    history: {
      starVisibility: [
        73, 72, 71, 72, 73, 74, 73, 72, 71, 70, 69, 70, 71, 72, 73, 74, 73, 72,
        71, 70, 69, 68, 69, 73,
      ],
      cloudCover: [
        11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 12, 11, 10, 11, 10, 11, 12,
        11, 10, 11, 10, 11, 11,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "kanker",
    name: "Kanker",
    coords: [21.13, 81.32],
    starVisibility: 82,
    cloudCover: 6,
    lightPollution: 2.4,
    temperature: 19,
    humidity: 60,
    history: {
      starVisibility: [
        82, 81, 82, 80, 79, 80, 81, 82, 83, 84, 85, 84, 83, 82, 81, 80, 81, 82,
        83, 84, 85, 86, 85, 82,
      ],
      cloudCover: [
        6, 5, 6, 5, 4, 5, 6, 6, 5, 4, 4, 5, 6, 7, 6, 5, 4, 3, 3, 4, 5, 6, 6, 6,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "kondagaon",
    name: "Kondagaon",
    coords: [20.87, 81.67],
    starVisibility: 84,
    cloudCover: 5,
    lightPollution: 2.2,
    temperature: 18,
    humidity: 62,
    history: {
      starVisibility: [
        84, 83, 84, 83, 84, 85, 84, 83, 82, 81, 82, 83, 84, 85, 84, 83, 82, 83,
        84, 85, 84, 83, 82, 84,
      ],
      cloudCover: [
        5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 4, 5, 4, 5, 5,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "bastar",
    name: "Bastar",
    coords: [20.58, 82.0],
    starVisibility: 88,
    cloudCover: 4,
    lightPollution: 1.8,
    temperature: 18,
    humidity: 63,
    history: {
      starVisibility: [
        88, 87, 86, 87, 88, 89, 90, 89, 88, 87, 86, 85, 86, 87, 88, 89, 90, 89,
        88, 87, 86, 85, 86, 88,
      ],
      cloudCover: [
        4, 3, 4, 3, 4, 3, 4, 4, 3, 2, 2, 3, 3, 4, 4, 3, 2, 2, 3, 3, 4, 4, 3, 4,
      ],
      lightPollution: [
        2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "dantewada",
    name: "Dantewada",
    coords: [20.68, 81.48],
    starVisibility: 86,
    cloudCover: 5,
    lightPollution: 2.0,
    temperature: 18,
    humidity: 64,
    history: {
      starVisibility: [
        86, 85, 86, 85, 86, 87, 86, 85, 84, 83, 84, 85, 86, 87, 86, 85, 84, 85,
        86, 87, 86, 85, 84, 86,
      ],
      cloudCover: [
        5, 5, 4, 5, 5, 4, 5, 4, 5, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 4, 5, 4, 5, 5,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "bijapur",
    name: "Bijapur",
    coords: [19.54, 81.05],
    starVisibility: 83,
    cloudCover: 6,
    lightPollution: 2.3,
    temperature: 19,
    humidity: 65,
    history: {
      starVisibility: [
        83, 82, 83, 82, 83, 84, 83, 82, 81, 80, 81, 82, 83, 84, 83, 82, 81, 82,
        83, 84, 83, 82, 81, 83,
      ],
      cloudCover: [
        6, 6, 5, 6, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 6,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "narayanpur",
    name: "Narayanpur",
    coords: [20.37, 81.18],
    starVisibility: 85,
    cloudCover: 7,
    lightPollution: 2.1,
    temperature: 17,
    humidity: 66,
    history: {
      starVisibility: [
        85, 84, 85, 86, 85, 84, 83, 84, 85, 86, 87, 86, 85, 84, 83, 84, 85, 86,
        87, 86, 85, 84, 83, 85,
      ],
      cloudCover: [
        7, 6, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 5, 6, 7, 6, 7,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "sukma",
    name: "Sukma",
    coords: [20.32, 81.22],
    starVisibility: 84,
    cloudCover: 6,
    lightPollution: 2.0,
    temperature: 18,
    humidity: 67,
    history: {
      starVisibility: [
        84, 83, 84, 83, 84, 85, 84, 83, 82, 81, 82, 83, 84, 85, 84, 83, 82, 83,
        84, 85, 84, 83, 82, 84,
      ],
      cloudCover: [
        6, 6, 5, 6, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 6,
      ],
      lightPollution: [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ],
    },
  },
  {
    id: "balrampur",
    name: "Balrampur-Ramanujganj",
    coords: [23.55, 83.85],
    starVisibility: 72,
    cloudCover: 13,
    lightPollution: 3.9,
    temperature: 19,
    humidity: 51,
    history: {
      starVisibility: [
        72, 71, 72, 71, 72, 73, 72, 71, 70, 69, 70, 71, 72, 71, 70, 71, 72, 73,
        72, 71, 70, 69, 68, 72,
      ],
      cloudCover: [
        13, 14, 13, 12, 13, 14, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12,
        13, 12, 13, 12, 13, 13,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "mungeli",
    name: "Mungeli",
    coords: [22.05, 81.75],
    starVisibility: 66,
    cloudCover: 18,
    lightPollution: 4.9,
    temperature: 23,
    humidity: 60,
    history: {
      starVisibility: [
        66, 65, 66, 65, 66, 67, 66, 65, 64, 63, 64, 65, 66, 67, 66, 65, 64, 65,
        66, 67, 66, 65, 64, 66,
      ],
      cloudCover: [
        18, 17, 18, 17, 18, 17, 18, 17, 16, 17, 18, 17, 18, 17, 16, 17, 18, 17,
        18, 17, 18, 17, 18, 18,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "bemetara",
    name: "Bemetara",
    coords: [21.57, 81.73],
    starVisibility: 69,
    cloudCover: 15,
    lightPollution: 4.6,
    temperature: 22,
    humidity: 55,
    history: {
      starVisibility: [
        69, 68, 69, 68, 69, 70, 69, 68, 67, 66, 67, 68, 69, 68, 67, 66, 67, 68,
        69, 68, 67, 66, 65, 69,
      ],
      cloudCover: [
        15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14,
        15, 14, 15, 14, 15, 15,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
  {
    id: "gariaband",
    name: "Gariaband",
    coords: [21.65, 81.42],
    starVisibility: 63,
    cloudCover: 20,
    lightPollution: 5.1,
    temperature: 22,
    humidity: 62,
    history: {
      starVisibility: [
        63, 62, 63, 62, 63, 64, 63, 62, 61, 60, 61, 62, 63, 64, 63, 62, 61, 62,
        63, 64, 63, 62, 61, 63,
      ],
      cloudCover: [
        20, 19, 20, 19, 20, 19, 20, 19, 18, 17, 18, 19, 20, 19, 18, 19, 20, 19,
        20, 19, 20, 19, 20, 20,
      ],
      lightPollution: [
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
    },
  },
  {
    id: "kabirdham",
    name: "Kabirdham (Kawardha)",
    coords: [21.75, 80.98],
    starVisibility: 71,
    cloudCover: 13,
    lightPollution: 4.2,
    temperature: 21,
    humidity: 54,
    history: {
      starVisibility: [
        71, 70, 69, 70, 71, 72, 71, 70, 69, 68, 69, 70, 71, 72, 71, 70, 69, 70,
        71, 72, 71, 70, 69, 71,
      ],
      cloudCover: [
        13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12,
        13, 12, 13, 12, 13, 13,
      ],
      lightPollution: [
        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
      ],
    },
  },
];
