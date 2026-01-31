export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Oct. 2025",
    title: "HoloScene accepted",
    description: "<strong>HoloScene</strong> is accepted to NeurIPS 2025.",
  },
  {
    date: "Jun. 2025",
    title: "ICCV 2025 papers",
    description: "<strong>WeatherWeaver</strong> and <strong>InvRGB+L</strong> are accepted to ICCV 2025.",
  },
  {
    date: "Feb. 2025",
    title: "CVPR 2025 papers",
    description: "<strong>IRIS</strong> and <strong>DiffusionRenderer</strong> are accepted to CVPR 2025.",
  },
  {
    date: "Jan. 2025",
    title: "Name change",
    description: "I changed the spelling of my name from \"Zhi-Hao Lin\" to \"Chih-Hao Lin\".",
  },
  {
    date: "Dec. 2024",
    title: "3DV 2025 papers",
    description: "<strong>UrbanIR</strong> and <strong>AutoVFX</strong> are accepted to 3DV 2025.",
  },
  {
    date: "Feb. 2024",
    title: "CVPR 2024 paper",
    description: "<strong>Video2Game</strong> is accepted to CVPR 2024.",
  },
  {
    date: "Sep. 2023",
    title: "RA-L 2023 paper",
    description: "<strong>Sim-on-Wheels</strong> is accepted to RA-L 2023.",
  },
  {
    date: "Jul. 2023",
    title: "ICCV 2023 paper",
    description: "<strong>ClimateNeRF</strong> is accepted to ICCV 2023.",
  },
  {
    date: "Aug. 2022",
    title: "Started PhD",
    description: "Start the PhD journey at UIUC! 🌽",
  },
];
