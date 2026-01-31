export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  previewVideoUrl?: string;
  award?: string;
  projectUrl?: string;
  videoUrl?: string;
  suppUrl?: string;
  oral?: boolean;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "NeurIPS",
    title: "HoloScene: Simulation-Ready Interactive 3D Worlds from a Single Video",
    authors: "<a href='https://xiahongchi.github.io/'>Hongchi Xia</a>, <strong>Chih-Hao Lin</strong>, <a href='https://haoyuhsu.github.io/'>Hao-Yu Hsu</a>, <a href='https://www.linkedin.com/in/quentinleboutet/?originalSubdomain=de'>Quentin Leboutet</a>, <a href='https://sites.google.com/view/katelyn-gao/home'>Katelyn Gao</a>, <a href='https://www.linkedin.com/in/michael-paulitsch/?originalSubdomain=de'>Michael Paulitsch</a>, <a href='https://scholar.google.com/citations?user=QGlp5ywAAAAJ&hl=en'>Benjamin Ummenhofer</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://xiahongchi.github.io/HoloScene/",
    paperUrl: "https://arxiv.org/abs/2510.05560",
    codeUrl: "https://github.com/xiahongchi/HoloScene",
    previewVideoUrl: "/images/2025/holoscene/teaser.mp4",
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "Controllable Weather Synthesis and Removal with Video Diffusion Models",
    authors: "<strong>Chih-Hao Lin</strong>, <a href='https://www.cs.toronto.edu/~zianwang/'>Zian Wang</a>, <a href='https://nexuslrf.github.io/'>Ruofan Liang</a>, <a href='https://scholar.google.com/citations?user=Jt5VvNgAAAAJ&hl=en'>Yuxuan Zhang</a>, <a href='https://www.cs.toronto.edu/~fidler/'>Sanja Fidler</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>, <a href='https://zgojcic.github.io/'>Zan Gojcic</a>",
    projectUrl: "https://research.nvidia.com/labs/toronto-ai/WeatherWeaver/",
    paperUrl: "https://arxiv.org/abs/2505.00704",
    videoUrl: "https://www.youtube.com/watch?v=TSl_URiqc7M",
    previewVideoUrl: "/images/2025/WeatherWeaver/teaser.mp4",
  },
  {
    year: "2025",
    conference: "ICCV",
    title: "InvRGB+L: Inverse Rendering of Complex Scenes with Unified Color and LiDAR Reflectance Modeling",
    authors: "<a href='https://scholar.google.com/citations?user=_tz64W0AAAAJ&hl=en'>Xiaoxue Chen</a>, <a href='https://bchandaka.github.io/'>Bhargav Chandaka</a>, <strong>Chih-Hao Lin</strong>, Ya-Qin Zhang, <a href='http://luthuli.cs.uiuc.edu/~daf/'>David Forsyth</a>, <a href='https://sites.google.com/view/fromandto'>Hao Zhao</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    paperUrl: "https://arxiv.org/abs/2507.17613",
    codeUrl: "https://github.com/cxx226/InvRGBL",
    previewVideoUrl: "/images/2025/InvRGBL/teaser.mp4",
  },
  {
    year: "2025",
    conference: "CVPR",
    title: "IRIS: Inverse Rendering of Indoor Scenes from Low Dynamic Range Images",
    authors: "<strong>Chih-Hao Lin</strong>, <a href='https://jbhuang0604.github.io/'>Jia-Bin Huang</a>, <a href='https://scholar.google.com/citations?hl=zh-CN&user=Nxc2RbQAAAAJ&view_op=list_works&sortby=pubdate'>Zhengqin Li</a>, <a href='http://flycooler.com/'>Zhao Dong</a>, <a href='https://richardt.name/'>Christian Richardt</a>, <a href='https://scholar.google.com/citations?user=jGQeuBUAAAAJ'>Tuotuo Li</a>, <a href='https://zollhoefer.com/'>Michael Zollhöfer</a>, <a href='https://johanneskopf.de/'>Johannes Kopf</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>, <a href='https://changilkim.com/'>Changil Kim</a>",
    projectUrl: "https://irisldr.github.io/",
    paperUrl: "https://arxiv.org/abs/2401.12977",
    codeUrl: "https://github.com/facebookresearch/iris",
    previewVideoUrl: "/images/2025/iris/teaser.mp4",
  },
  {
    year: "2025",
    conference: "CVPR",
    title: "DiffusionRenderer: Neural Inverse and Forward Rendering with Video Diffusion Models",
    authors: "<a href='https://nexuslrf.github.io/'>Ruofan Liang</a>, <a href='https://zgojcic.github.io/'>Zan Gojcic</a>, <a href='https://www.cs.toronto.edu/~linghuan/'>Huan Ling</a>, <a href='https://research.nvidia.com/person/jacob-munkberg'>Jacob Munkberg</a>, <a href='https://research.nvidia.com/person/jon-hasselgren'>Jon Hasselgren</a>, <strong>Chih-Hao Lin</strong>, <a href='https://www.cs.toronto.edu/~jungao/'>Jun Gao</a>, <a href='https://research.nvidia.com/person/alex-keller'>Alex Keller</a>, <a href='https://www.cs.toronto.edu/~nandita/'>Nandita Vijaykumar</a>, <a href='https://www.cs.toronto.edu/~fidler/'>Sanja Fidler</a>, <a href='https://www.cs.toronto.edu/~zianwang/'>Zian Wang</a>",
    projectUrl: "https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/",
    paperUrl: "https://arxiv.org/abs/2501.18590",
    codeUrl: "https://github.com/nv-tlabs/cosmos-transfer1-diffusion-renderer",
    previewVideoUrl: "/images/2025/DiffusionRenderer/teaser.mp4",
    oral: true,
  },
  {
    year: "2025",
    conference: "3DV",
    title: "AutoVFX: Physically Realistic Video Editing from Natural Language Instruction",
    authors: "<a href='https://haoyuhsu.github.io/'>Hao-Yu Hsu</a>, <strong>Chih-Hao Lin</strong>, <a href='https://ajzhai.github.io/'>Albert Zhai</a>, <a href='https://xiahongchi.github.io/'>Hongchi Xia</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://haoyuhsu.github.io/autovfx-website/",
    paperUrl: "https://arxiv.org/abs/2411.02394",
    codeUrl: "https://github.com/haoyuhsu/autovfx",
    previewVideoUrl: "/images/2025/autovfx/teaser.mp4",
  },
  {
    year: "2025",
    conference: "3DV",
    title: "UrbanIR: Large-Scale Urban Scene Inverse Rendering from a Single Video",
    authors: "<strong>Chih-Hao Lin</strong>, <a href='https://www.linkedin.com/in/bohanliu524/?locale=en_US'>Bohan Liu</a>, <a href='https://jamie725.github.io/website/'>Yi-Ting Chen</a>, <a href='https://www.linkedin.com/in/kuanshengchen'>Kuan-Sheng Chen</a>, <a href='http://luthuli.cs.uiuc.edu/~daf/'>David Forsyth</a>, <a href='https://jbhuang0604.github.io/'>Jia-Bin Huang</a>, <a href='https://anandbhattad.github.io/'>Anand Bhattad</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://urbaninverserendering.github.io/",
    paperUrl: "https://arxiv.org/abs/2306.09349",
    codeUrl: "https://github.com/chih-hao-lin/urbanir",
    previewVideoUrl: "/images/2025/urbanir/teaser.mp4",
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "Video2Game: Real-time, Interactive, Realistic and Browser-Compatible Environment from a Single Video",
    authors: "<a href='https://xiahongchi.github.io/'>Hongchi Xia</a>, <strong>Zhi-Hao Lin</strong>, <a href='https://people.csail.mit.edu/weichium/'>Wei-Chiu Ma</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://video2game.github.io/",
    paperUrl: "https://arxiv.org/abs/2404.09833",
    codeUrl: "https://github.com/video2game/video2game",
    previewVideoUrl: "/images/2024/video2game/teaser.mp4",
  },
  {
    year: "2023",
    conference: "ICCV",
    title: "ClimateNeRF: Extreme Weather Synthesis in Neural Radiance Field",
    authors: "<a href='https://y-u-a-n-l-i.github.io/'>Yuan Li*</a>, <strong>Zhi-Hao Lin*</strong>, <a href='http://luthuli.cs.uiuc.edu/~daf/'>David Forsyth</a>, <a href='https://jbhuang0604.github.io/'>Jia-Bin Huang</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a> (* Equal Contribution)",
    projectUrl: "https://climatenerf.github.io/",
    paperUrl: "https://arxiv.org/pdf/2211.13226",
    codeUrl: "https://github.com/y-u-a-n-l-i/Climate_NeRF",
    previewVideoUrl: "/images/2023/climatenerf/teaser.mp4",
  },
  {
    year: "2023",
    conference: "Robotics and Automation Letters (RA-L)",
    title: "Sim-on-Wheels: Physical World in the Loop Simulation for Autonomous Driving",
    authors: "<a href='https://yshen47.github.io/'>Yuan Shen*</a>, <a href='https://bchandaka.github.io/'>Bhargav Chandaka*</a>, <strong>Zhi-Hao Lin</strong>, <a href='https://ajzhai.github.io/'>Albert Zhai</a>, <a href='https://hangpersonal.com/'>Hang Cui</a>, <a href='http://luthuli.cs.uiuc.edu/~daf/'>David Forsyth</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://sim-on-wheels.github.io/",
    paperUrl: "https://arxiv.org/abs/2306.08807",
    codeUrl: "https://github.com/Sim-on-Wheels",
    previewVideoUrl: "/images/2023/sim-on-wheels/teaser.mp4",
  },
  {
    year: "2022",
    conference: "CVPR",
    title: "NeuMips: Neural Mixture of Planar Experts for View Synthesis",
    authors: "<strong>Zhi-Hao Lin</strong>, <a href='https://people.csail.mit.edu/weichium/'>Wei-Chiu Ma*</a>, <a href='https://haoyuhsu.github.io/'>Hao-Yu Hsu*</a>, <a href='http://vllab.ee.ntu.edu.tw/ycwang.html'>Yu-Chiang Frank Wang</a>, <a href='https://shenlong.web.illinois.edu/'>Shenlong Wang</a>",
    projectUrl: "https://chih-hao-lin.github.io/neurmips/",
    paperUrl: "https://arxiv.org/abs/2204.13696",
    codeUrl: "https://github.com/chih-hao-lin/neurmips",
    videoUrl: "https://youtu.be/PV1dCTWL5Oo",
    previewVideoUrl: "/images/2022/neurmips/teaser.mp4",
  },
  {
    year: "2021",
    conference: "TPAMI",
    title: "Learning of 3D Graph Convolution Networks for Point Cloud Analysis",
    authors: "<strong>Zhi-Hao Lin</strong>, Sheng-Yu Huang, <a href='http://vllab.ee.ntu.edu.tw/ycwang.html'>Yu-Chiang Frank Wang</a>",
    paperUrl: "https://drive.google.com/file/d/1AY4wwVtj15WCRlpcH74fi4WkUdMAMCEZ/view?usp=sharing",
    previewVideoUrl: "/images/2021/gcn3d_pami/teaser.mp4",
  },
  {
    year: "2020",
    conference: "CVPR",
    title: "Convolution in the Cloud: Learning Deformable Kernels in 3D Graph Convolution Networks for Point Cloud Analysis",
    authors: "<strong>Zhi-Hao Lin</strong>, Sheng-Yu Huang, <a href='http://vllab.ee.ntu.edu.tw/ycwang.html'>Yu-Chiang Frank Wang</a>",
    paperUrl: "https://openaccess.thecvf.com/content_CVPR_2020/papers/Lin_Convolution_in_the_Cloud_Learning_Deformable_Kernels_in_3D_Graph_CVPR_2020_paper.pdf",
    codeUrl: "https://github.com/chih-hao-lin/3dgcn",
    videoUrl: "https://www.youtube.com/watch?v=xfftSRFlWY0",
    imageUrl: "/images/2020/gcn3d_cvpr/teaser.png",
  },
];
