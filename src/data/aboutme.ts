export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Chih-Hao Lin",
  title: "Ph.D. Student",
  institution: "UIUC",
  description:
    "Hi! I'm a Ph.D. student in Computer Science at UIUC, " +
    "where I'm advised by Prof. <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>. " +
    "I have the privilege of collaborating closely with " +
    "Prof. <a href='https://www.cs.cornell.edu/~weichiu/'>Wei-Chiu Ma</a>, " +
    "Prof. <a href='https://jbhuang0604.github.io/'>Jia-Bin Huang</a>, and " +
    "Prof. <a href='http://luthuli.cs.uiuc.edu/~daf/'>David Forsyth</a>. " +
    "Before joining UIUC, I earned my Bachelor's and Master's degree from National Taiwan University (NTU), " +
    "and was advised by Prof. <a href='http://vllab.ee.ntu.edu.tw/ycwang.html'>Yu-Chiang Frank Wang</a>. " +
    "My research interests lie at the intersection of 3D vision, neural rendering, and simulation. " +
    "My long-term goal is to develop digital tools that empower individuals to tell their own stories in innovative and efficient ways.",
  email: "cl121@illinois.edu",
  imageUrl: "/images/chih-hao_2.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=QdqDnA0AAAAJ",
  githubUsername: "chih-hao-lin",
  twitterUsername: "ZhiHaoLin16",
  cvUrl: "/docs/CV_chih_hao.pdf",
  institutionUrl: "https://illinois.edu",
};
