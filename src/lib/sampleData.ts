export const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    short: 'Performant, accessible web apps',
    subtitle: 'Professional Solutions',
    details:
      'Full-stack web applications focused on performance, accessibility and scalability. We deliver modern React apps with clean architecture and CI-enabled workflows.',
    features: ['Progressive Web Apps', 'SSR/SSG', 'Performance budgets', 'Testing & CI'],
    process: [
      'Discovery',
      'Architecture',
      'Implementation',
      'Testing',
      'Deployment',
      'Optimization'
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    short: 'Human-centred, research-driven interfaces',
    subtitle: 'Premium Services',
    details:
      'End-to-end product design from discovery to high-fidelity prototypes. Emphasis on usable, delightful experiences and design systems.',
    features: ['User Research', 'Wireframes', 'Design Systems', 'Prototyping'],
    process: ['Discovery', 'Research', 'Prototyping', 'Testing', 'Handoff', 'Iterate'],
    tech: ['Figma', 'Design Systems', 'Framer', 'Accessibility']
  },
  {
    id: '3d-web',
    title: '3D Web Experiences',
    short: 'Immersive 3D and WebGL interactions',
    subtitle: 'Professional Solutions',
    details:
      'Interactive 3D scenes, product visualizers and WebXR experiences using Three.js, React-Three-Fiber and performant asset pipelines.',
    features: ['Product Visualizers', 'Interactive Scenes', 'WebXR', 'Optimized Assets', 'Product Configurators'],
    process: [
      'Concept Development',
      '3D Modeling',
      'Texturing & Lighting',
      'Animation',
      'Web Integration',
      'Optimization'
    ],
    tech: ['Three.js', 'r3f', 'GLTF', 'WebGL', 'Blender']
  },
  {
    id: 'software-it',
    title: 'Software & IT Solutions',
    short: 'Robust backend and infra',
    subtitle: 'Enterprise-ready',
    details:
      'From APIs to CI/CD and infrastructure, we build maintainable systems that scale. Security, monitoring and observability are core concerns.',
    features: ['APIs & Microservices', 'Cloud Infra', 'Monitoring', 'SLA-driven Support'],
    process: ['Discovery', 'Architecture', 'Implementation', 'Monitoring', 'Support', 'Optimization'],
    tech: ['Node.js', 'Docker', 'K8s', 'Postgres']
  }
];

export const projects = [
  {
    id: 'ecommerce-1',
    title: 'Neon Storefront',
    category: 'Web App',
    image: '/vijquant-projects/e-commerce.html',
    short: 'A high-conversion e-commerce demo with custom product visualizers.',
    details:
      'Built a performant storefront with dynamic product visualizers, optimistic UI patterns and integrated payments.',
    problem: 'Slow product pages and low engagement due to static imagery.',
    solution: 'Introduced 3D product previews, optimized asset loading and improved checkout flow.',
    outcomes: ['+35% conversions', '50% faster TTFB', 'Reduced bounce'],
    tech: ['React', 'r3f', 'Stripe', 'Vercel']
  },
  {
    id: 'design-1',
    title: 'Fintech Dashboard',
    category: 'UI/UX',
    image: '/vijquant-projects/Inventory_Dashboard.html',
    short: 'Dashboard redesign for enterprise users with complex data.',
    details: 'Iterative redesign and a component-driven system to simplify workflows.',
    problem: 'Cognitive overload and inconsistent UIs.',
    solution: 'Design system, simplified flows and improved visual hierarchy.',
    outcomes: ['Improved adoption', 'Cleaner workflows'],
    tech: ['Figma', 'React', 'Tailwind']
  },
  {
    id: '3d-1',
    title: 'AR Product Demo',
    category: '3D',
    image: '/vijquant-projects/green_tea.html',
    short: 'Interactive AR-enabled product demo for marketing campaigns.',
    details: 'Lightweight 3D scenes and mobile-friendly AR experiences.',
    problem: 'Low engagement with static campaigns.',
    solution: 'AR experiences that increased dwell time.',
    outcomes: ['+2x dwell time', 'Higher social shares'],
    tech: ['Three.js', 'WebXR']
  },
  {
    id: 'software-1',
    title: 'Enterprise API Suite',
    category: 'Software',
    image: '/vijquant-projects/pos_billing.html',
    short: 'Scalable API platform with role-based access and monitoring.',
    details: 'Secure, monitored APIs with clear SLAs and observability.',
    problem: 'Legacy systems with poor developer experience.',
    solution: 'API-first platform, automated docs and CI/CD.',
    outcomes: ['Faster onboarding', 'Improved reliability'],
    tech: ['Node.js', 'Postgres', 'Prometheus']
  }
];

export const categories = ['All', 'Web App', 'UI/UX', '3D', 'Software'];
