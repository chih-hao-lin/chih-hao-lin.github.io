export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "May 2024 - May 2025",
    title: "Research Scientist Intern",
    company: "NVIDIA",
    description: "Simulate controllable and realistic weather effects in videos. [ICCV 2025]",
    advisor: "<a href='https://zgojcic.github.io/'>Zan Gojcic</a>, <a href='https://www.cs.toronto.edu/~zianwang/'>Zian Wang</a>",
    companyUrl: "https://research.nvidia.com/labs/sil/",
  },
  {
    date: "May 2023 - Dec 2023",
    title: "Research Scientist Intern",
    company: "Meta",
    description: "Inverse rendering and relighting of indoor scenes. [CVPR 2025]",
    advisor: "<a href='https://changilkim.com/'>Changil Kim</a>",
    companyUrl: "https://about.meta.com",
  },
];
