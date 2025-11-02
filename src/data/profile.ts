export const profile = {
  name: 'Sai Tharun Reddy Mulka',
  title: 'Ph.D. Student · S3 Lab · University of Texas at Dallas',
  location: 'Richardson, TX',
  email: 'sxm220351@utdallas.edu',
  links: [
    { label: 'GitHub', href: 'https://github.com/saitharun051' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/saitharunreddy' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=fFFmw0UAAAAJ&hl=en' },
    { label: 'Lab', href: 'https://www.s3lab.io/' },
    { label: 'Advisor', href: 'https://www.s3lab.io/profile/chungkim' },
    { label: 'CV (PDF)', href: '/cv/Resume_V1.pdf' },
  ],
  blurb:
    'I build trustworthy autonomy through hardware-assisted security, agentic AI safety, and grounded VLA control for robotics and CPS.',
}

export const sections = {
  education: [
    {
      degree: 'Ph.D., Computer Science (Security)',
      school: 'University of Texas at Dallas',
      period: 'Aug 2023 – May 2028 (expected)',
      notes: [
        'Advisor: Prof. Chung Hwan Kim, Software & Systems Security (S3 Lab)',
        'Focus: physical-layer device authentication, agentic AI safety, CPS fuzzing',
      ],
    },
    {
      degree: 'M.S., Computer Science (Security)',
      school: 'University of Texas at Dallas',
      period: 'Aug 2023 – May 2025',
      notes: [
        'Advanced OS; Systems Security & Binary Analysis; Machine Learning',
        "Jonsson School Dean's Graduate Scholarship (2023–2024)",
      ],
    },
    {
      degree: 'B.Tech., Computer Science (Networking & Security)',
      school: 'Vellore Institute of Technology',
      period: 'Jun 2019 – Jun 2023',
      notes: [
        'Thesis: Email Spoofing (Advisor: Dr. S. C. Sethuraman)',
        "Dean's Research Excellence Award (2020)",
      ],
    },
  ],
  research: [
    {
      title: 'VOLTRON: Physical-Layer Authentication for USB Peripherals',
      period: 'Spring 2024 – Fall 2025',
      tags: ['Hardware Security','USB','Signal Processing','ML'],
      bullets: [
        'Identify devices from electrical-layer signals; no HW/FW/OS mods.',
        'Features: transients, FFT spectral signatures, envelope descriptors.',
        'Validated across 70+ commercial devices; robust to cable/port noise.',
      ],
    },
    {
      title: 'Agentic AI for Autonomous Robotics Control & Safety',
      period: 'Fall 2025 – Present',
      tags: ['ROS2','Isaac Sim','MoveIt2','Safety'],
      bullets: [
        'LLMs reason, choose tools, and plan motion via ROS2 actions/topics.',
        'Closed-loop state feedback and object-pose streams for self-correction.',
        'Benchmarked LLM plans vs MoveIt2; studied grounding/frame errors.',
      ],
    },
    {
      title: 'VLA for Grounded Manipulation',
      period: 'Fall 2025 – Present',
      tags: ['OpenVLA','RT-2','PyTorch','CUDA'],
      bullets: [
        'Fuse RGB/depth encoders with LLM reasoning for actions.',
        'Decode goals to joint-space trajectories & gripper commands.',
        'Mitigate depth/ambiguity via data sampling and prompt conditioning.',
      ],
    },
  ],
  publications: [
    {
      title: 'VOLTRON: Physical-Layer Fingerprinting for USB Device Authentication',
      venue: 'USENIX Security (Rebuttal Stage), 2025',
      links: [{ label: 'PDF', href: 'https://drive.google.com/file/d/1TOYnGHR0yS5UgZ0e52u3eVO6qysTQyMk/view?usp=sharing' }],
    },
    {
      title: 'A Comprehensive Examination of Email Spoofing: Issues and Prospects',
      venue: 'Computers & Security, 2023',
      links: [{ label: 'DOI', href: 'https://dl.acm.org/doi/10.1016/j.cose.2023.103600' }],
    },
    {
      title: 'ANN Autoencoder for Insider Threat Detection',
      venue: 'Future Internet, 2023',
      links: [{ label: 'MDPI', href: 'https://www.mdpi.com/1999-5903/15/12/373' }],
    },
  ],
}
