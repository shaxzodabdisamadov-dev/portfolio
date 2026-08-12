export const portfolioData = {
  personal: {
    name: 'Shaxzod Abdisamadov',
    title: 'DevOps & IT Infrastructure Specialist',
    email: 'abdisamadovshaxzod55@gmail.com',
    telegram: '@shaxzod_023',
    github: 'shaxzodabdisamadov-dev',
    location: 'Tashkent, Uzbekistan',
    bio: 'Building reliable infrastructure, secure networks, and scalable technical environments.',
    experience: '4+',
  },
  about: {
    headline:
      'I am a DevOps and IT Infrastructure specialist with 4+ years of hands-on experience in designing, implementing, and maintaining robust technical environments.',
    description: `With a strong foundation in infrastructure management, networking, and server administration, I specialize in:

• Infrastructure planning and deployment
• Network design and security
• Server administration (Linux & Windows)
• Virtualization and containerization
• Monitoring and system reliability
• Firewall configuration and network security

My approach focuses on creating reliable, secure, and scalable systems that support business operations. I have worked across multiple infrastructure technologies and am committed to continuous learning and best practices in DevOps.`,
    education: {
      university: 'Tashkent University of Information Technologies',
      degree: 'Telecommunication Technologies',
    },
  },
  experience: [
    {
      position: 'Advisor to the Head',
      company: 'Tashkent City Statistics Department',
      period: '4+ years',
      description:
        'Infrastructure oversight and technical advisory. Responsible for IT infrastructure decisions, server administration, network management, and system reliability.',
      technologies: ['Windows Server', 'Linux', 'Networking', 'Firewall', 'VirtualBox', 'Docker'],
    },
  ],
  skills: {
    infrastructure: [
      { name: 'Windows Server', description: 'Server administration and management' },
      { name: 'Linux', description: 'System administration and configuration' },
      { name: 'VirtualBox', description: 'Virtualization and VM management' },
      { name: 'Server Administration', description: 'Infrastructure management' },
      { name: 'IT Infrastructure', description: 'Design and implementation' },
    ],
    networking: [
      { name: 'Cisco', description: 'Network equipment and configuration' },
      { name: 'Network Administration', description: 'Network management' },
      { name: 'Network Troubleshooting', description: 'Diagnostics and resolution' },
      { name: 'Firewall', description: 'Security and access control' },
      { name: 'Network Security', description: 'Security implementation' },
    ],
    devops: [
      { name: 'Docker', description: 'Containerization and orchestration' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Repository management' },
      { name: 'Monitoring', description: 'System and application monitoring' },
      { name: 'Virtualization', description: 'Hypervisor and VM management' },
    ],
    other: [
      { name: 'Computer Architecture', description: 'Hardware and systems design' },
      { name: 'C++', description: 'Programming' },
      { name: 'Microsoft Office', description: 'Productivity tools' },
      { name: 'English', description: 'Professional communication' },
    ],
  },
  projects: [
    {
      id: 1,
      title: 'Infrastructure Projects',
      description:
        'Selected infrastructure and systems projects will be showcased here. Projects demonstrating infrastructure design, network implementation, and system optimization.',
      status: 'In Development',
    },
  ],
  contact: {
    email: 'abdisamadovshaxzod55@gmail.com',
    telegram: 'https://t.me/shaxzod_023',
    github: 'https://github.com/shaxzodabdisamadov-dev',
  },
}

export const systemStatusItems = [
  { label: 'INFRASTRUCTURE', status: 'operational', icon: '🔧' },
  { label: 'NETWORK', status: 'online', icon: '🌐' },
  { label: 'SECURITY', status: 'protected', icon: '🔒' },
  { label: 'MONITORING', status: 'active', icon: '📊' },
  { label: 'CONTAINERS', status: 'ready', icon: '📦' },
  { label: 'SYSTEMS', status: 'stable', icon: '⚙️' },
]

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
