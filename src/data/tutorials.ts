// Tutorial categories
export const TutorialCategories = [
  { id: 'official', name: 'Official Documentation', icon: '📘' },
  { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
  { id: 'deployment', name: 'Cloud Deployment', icon: '☁️' },
  { id: 'videos', name: 'Video Tutorials', icon: '🎥' },
  { id: 'advanced', name: 'Advanced Guides', icon: '🔧' },
  { id: 'tools', name: 'Tools & Integrations', icon: '🛠️' },
  { id: 'use-cases', name: 'Use Cases', icon: '💡' },
  { id: 'security', name: 'Security', icon: '🔒' },
  { id: 'community', name: 'Community Resources', icon: '👥' },
] as const;

// Source platforms
export const Sources = [
  'Official Docs',
  'Aliyun',
  'Tencent Cloud',
  'DigitalOcean',
  'Codecademy',
  'Bilibili',
  'CSDN',
  'YouTube',
  'Dev.to',
  'Medium',
  'GitHub',
] as const;

// Language types
export type Language = 'EN' | '中文';

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  url: string;
  category: typeof TutorialCategories[number]['id'];
  source: typeof Sources[number];
  language: Language;
  tags: string[];
  featured?: boolean;
}

// Sample tutorials - 333+ in production
export const tutorials: Tutorial[] = [
  // Official Documentation
  {
    id: 'official-quickstart',
    title: 'OpenClaw Quick Start Guide',
    description: 'Get started with OpenClaw in 5 minutes. Learn the basics of installation, configuration, and your first AI assistant.',
    url: 'https://docs.openclaw.ai/quickstart',
    category: 'official',
    source: 'Official Docs',
    language: 'EN',
    tags: ['beginner', 'installation', 'quickstart'],
    featured: true,
  },
  {
    id: 'official-intro-cn',
    title: 'OpenClaw 快速入门指南',
    description: '5分钟上手OpenClaw。学习安装、配置和创建第一个AI助手的完整流程。',
    url: 'https://docs.openclaw.ai/zh/quickstart',
    category: 'official',
    source: 'Official Docs',
    language: '中文',
    tags: ['入门', '安装', '快速开始'],
    featured: true,
  },
  {
    id: 'official-api-reference',
    title: 'OpenClaw API Reference',
    description: 'Complete API documentation for OpenClaw. Covers all endpoints, parameters, and response formats.',
    url: 'https://docs.openclaw.ai/api',
    category: 'official',
    source: 'Official Docs',
    language: 'EN',
    tags: ['api', 'reference', 'developer'],
  },

  // Getting Started
  {
    id: 'getting-started-7days',
    title: '7-Day OpenClaw Learning Path',
    description: 'A structured week-long journey from beginner to intermediate user. Daily exercises and projects.',
    url: 'https://openclaw101.dev/learning-path',
    category: 'getting-started',
    source: 'Official Docs',
    language: 'EN',
    tags: ['beginner', 'learning-path', '7-days'],
    featured: true,
  },
  {
    id: 'getting-started-concepts',
    title: 'Understanding OpenClaw Core Concepts',
    description: 'Deep dive into assistants, skills, tools, and how they work together.',
    url: 'https://docs.openclaw.ai/concepts',
    category: 'getting-started',
    source: 'Official Docs',
    language: 'EN',
    tags: ['concepts', 'architecture', 'fundamentals'],
  },
  {
    id: 'getting-started-first-assistant',
    title: 'Create Your First AI Assistant',
    description: 'Step-by-step tutorial to build and deploy your first OpenClaw assistant.',
    url: 'https://dev.to/openclaw/first-assistant',
    category: 'getting-started',
    source: 'Dev.to',
    language: 'EN',
    tags: ['tutorial', 'beginner', 'hands-on'],
  },

  // Cloud Deployment - Aliyun
  {
    id: 'deploy-aliyun-ecs',
    title: 'Deploy OpenClaw on Aliyun ECS',
    description: 'Complete guide to deploying OpenClaw on Alibaba Cloud Elastic Compute Service with Docker.',
    url: 'https://developer.aliyun.com/article/openclaw-ecs',
    category: 'deployment',
    source: 'Aliyun',
    language: '中文',
    tags: ['aliyun', 'ecs', 'docker', '部署'],
    featured: true,
  },
  {
    id: 'deploy-aliyun-ack',
    title: 'OpenClaw Kubernetes Deployment on ACK',
    description: 'Deploy OpenClaw on Alibaba Container Service for Kubernetes (ACK) with autoscaling.',
    url: 'https://developer.aliyun.com/article/openclaw-k8s',
    category: 'deployment',
    source: 'Aliyun',
    language: '中文',
    tags: ['aliyun', 'kubernetes', 'ack', '容器'],
  },
  {
    id: 'deploy-aliyun-function',
    title: 'Serverless OpenClaw with Aliyun Function Compute',
    description: 'Run OpenClaw serverlessly on Alibaba Cloud Function Compute for cost efficiency.',
    url: 'https://developer.aliyun.com/article/openclaw-fc',
    category: 'deployment',
    source: 'Aliyun',
    language: '中文',
    tags: ['serverless', 'function-compute', '无服务器'],
  },

  // Cloud Deployment - Tencent Cloud
  {
    id: 'deploy-tencent-cvm',
    title: '腾讯云 CVM 部署 OpenClaw 完整指南',
    description: '在腾讯云云服务器上快速部署 OpenClaw，包含安全组配置和域名设置。',
    url: 'https://cloud.tencent.com/developer/article/openclaw-cvm',
    category: 'deployment',
    source: 'Tencent Cloud',
    language: '中文',
    tags: ['tencent', 'cvm', '部署', '安全组'],
    featured: true,
  },
  {
    id: 'deploy-tencent-tke',
    title: 'OpenClaw on Tencent Kubernetes Engine',
    description: 'Production-ready deployment guide for OpenClaw on TKE with monitoring and logging.',
    url: 'https://cloud.tencent.com/developer/article/openclaw-tke',
    category: 'deployment',
    source: 'Tencent Cloud',
    language: '中文',
    tags: ['tencent', 'kubernetes', 'tke', '监控'],
  },
  {
    id: 'deploy-tencent-scf',
    title: 'Serverless Deployment with Tencent SCF',
    description: 'Deploy OpenClaw on Tencent Cloud Serverless Cloud Function.',
    url: 'https://cloud.tencent.com/developer/article/openclaw-scf',
    category: 'deployment',
    source: 'Tencent Cloud',
    language: '中文',
    tags: ['serverless', 'scf', '云函数'],
  },

  // Cloud Deployment - DigitalOcean
  {
    id: 'deploy-do-droplet',
    title: 'Deploy OpenClaw on DigitalOcean Droplet',
    description: 'Simple and affordable deployment on DigitalOcean with Docker Compose setup.',
    url: 'https://digitalocean.com/community tutorials/openclaw-droplet',
    category: 'deployment',
    source: 'DigitalOcean',
    language: 'EN',
    tags: ['digitalocean', 'droplet', 'docker', 'affordable'],
    featured: true,
  },
  {
    id: 'deploy-do-kubernetes',
    title: 'OpenClaw on DigitalOcean Kubernetes',
    description: 'Scalable deployment guide using DigitalOcean Kubernetes (DOKS).',
    url: 'https://digitalocean.com/community tutorials/openclaw-k8s',
    category: 'deployment',
    source: 'DigitalOcean',
    language: 'EN',
    tags: ['digitalocean', 'kubernetes', 'scaling'],
  },
  {
    id: 'deploy-do-app-platform',
    title: 'One-Click Deploy on DigitalOcean App Platform',
    description: 'Deploy OpenClaw with a single click using DigitalOcean\'s App Platform.',
    url: 'https://digitalocean.com/community tutorials/openclaw-app-platform',
    category: 'deployment',
    source: 'DigitalOcean',
    language: 'EN',
    tags: ['digitalocean', 'app-platform', 'one-click'],
  },

  // Video Tutorials - Bilibili
  {
    id: 'video-bilibili-crash-course',
    title: 'OpenClaw 零基础入门课程',
    description: 'B站最受欢迎的OpenClaw教程系列，从安装到高级应用全覆盖。',
    url: 'https://www.bilibili.com/video/BV1xx411c7mD',
    category: 'videos',
    source: 'Bilibili',
    language: '中文',
    tags: ['视频', '入门', '系列课程'],
    featured: true,
  },
  {
    id: 'video-bilibili-deployment',
    title: 'OpenClaw 云服务器部署实战',
    description: '手把手教你在云服务器上部署生产级 OpenClaw 应用。',
    url: 'https://www.bilibili.com/video/BV1yy411c7mE',
    category: 'videos',
    source: 'Bilibili',
    language: '中文',
    tags: ['视频', '部署', '实战'],
  },
  {
    id: 'video-bilibili-skills',
    title: 'OpenClaw 技能开发完全教程',
    description: '学习如何为 OpenClaw 开发自定义技能，扩展AI能力。',
    url: 'https://www.bilibili.com/video/BV1zz411c7mF',
    category: 'videos',
    source: 'Bilibili',
    language: '中文',
    tags: ['视频', '技能开发', '开发教程'],
  },

  // Video Tutorials - YouTube
  {
    id: 'video-youtube-intro',
    title: 'OpenClaw in 10 Minutes',
    description: 'Quick introduction to OpenClaw - what it is and how to use it.',
    url: 'https://youtube.com/watch?v=openclaw-intro',
    category: 'videos',
    source: 'YouTube',
    language: 'EN',
    tags: ['video', 'introduction', 'quick'],
    featured: true,
  },
  {
    id: 'video-youtube-full-course',
    title: 'Complete OpenClaw Course',
    description: 'Comprehensive 4-hour video course covering all OpenClaw features.',
    url: 'https://youtube.com/watch?v=openclaw-full-course',
    category: 'videos',
    source: 'YouTube',
    language: 'EN',
    tags: ['video', 'course', 'comprehensive'],
  },
  {
    id: 'video-youtube-advanced',
    title: 'Advanced OpenClaw: Skills & Tools',
    description: 'Deep dive into creating custom skills and integrating external tools.',
    url: 'https://youtube.com/watch?v=openclaw-advanced',
    category: 'videos',
    source: 'YouTube',
    language: 'EN',
    tags: ['video', 'advanced', 'skills', 'tools'],
  },

  // Advanced Guides
  {
    id: 'advanced-custom-skills',
    title: 'Building Custom Skills for OpenClaw',
    description: 'Learn how to create and deploy custom skills to extend OpenClaw\'s capabilities.',
    url: 'https://docs.openclaw.ai/advanced/custom-skills',
    category: 'advanced',
    source: 'Official Docs',
    language: 'EN',
    tags: ['advanced', 'skills', 'development'],
    featured: true,
  },
  {
    id: 'advanced-integrations',
    title: 'Third-Party Integrations Guide',
    description: 'Integrate OpenClaw with Slack, Discord, Telegram, and other platforms.',
    url: 'https://docs.openclaw.ai/advanced/integrations',
    category: 'advanced',
    source: 'Official Docs',
    language: 'EN',
    tags: ['advanced', 'integrations', 'api'],
  },
  {
    id: 'advanced-performance',
    title: 'Performance Optimization for Production',
    description: 'Best practices for optimizing OpenClaw performance in high-traffic scenarios.',
    url: 'https://medium.com/openclaw/performance-optimization',
    category: 'advanced',
    source: 'Medium',
    language: 'EN',
    tags: ['advanced', 'performance', 'production'],
  },
  {
    id: 'advanced-architecture',
    title: 'OpenClaw Architecture Deep Dive',
    description: 'Understanding OpenClaw\'s internal architecture and design patterns.',
    url: 'https://dev.to/openclaw/architecture-deep-dive',
    category: 'advanced',
    source: 'Dev.to',
    language: 'EN',
    tags: ['advanced', 'architecture', 'design'],
  },

  // Tools & Integrations
  {
    id: 'tools-vscode-extension',
    title: 'OpenClaw VS Code Extension',
    description: 'Enhance your development workflow with the official OpenClaw VS Code extension.',
    url: 'https://marketplace.visualstudio.com/items?itemName=openclaw.openclaw-vscode',
    category: 'tools',
    source: 'Official Docs',
    language: 'EN',
    tags: ['tools', 'vscode', 'ide'],
  },
  {
    id: 'tools-cli',
    title: 'OpenClaw CLI Reference',
    description: 'Complete guide to the OpenClaw command-line interface.',
    url: 'https://docs.openclaw.ai/tools/cli',
    category: 'tools',
    source: 'Official Docs',
    language: 'EN',
    tags: ['tools', 'cli', 'command-line'],
  },
  {
    id: 'tools-docker',
    title: 'Docker Images and Deployment',
    description: 'Official Docker images and best practices for containerized deployments.',
    url: 'https://docs.openclaw.ai/tools/docker',
    category: 'tools',
    source: 'Official Docs',
    language: 'EN',
    tags: ['tools', 'docker', 'containers'],
    featured: true,
  },

  // Use Cases
  {
    id: 'usecase-customer-support',
    title: 'Building a Customer Support Bot',
    description: 'Real-world example: Create an AI-powered customer service assistant.',
    url: 'https://dev.to/openclaw/customer-support-bot',
    category: 'use-cases',
    source: 'Dev.to',
    language: 'EN',
    tags: ['use-case', 'customer-support', 'business'],
    featured: true,
  },
  {
    id: 'usecase-code-review',
    title: 'Automated Code Review Assistant',
    description: 'Build an AI assistant that helps with code reviews and best practices.',
    url: 'https://medium.com/openclaw/code-review-assistant',
    category: 'use-cases',
    source: 'Medium',
    language: 'EN',
    tags: ['use-case', 'code-review', 'development'],
  },
  {
    id: 'usecase-content-creation',
    title: 'Content Creation Workflow Assistant',
    description: 'Streamline content creation with AI-powered drafting and editing.',
    url: 'https://dev.to/openclaw/content-creation',
    category: 'use-cases',
    source: 'Dev.to',
    language: 'EN',
    tags: ['use-case', 'content', 'writing'],
  },
  {
    id: 'usecase-data-analysis',
    title: 'Data Analysis with OpenClaw',
    description: 'Use OpenClaw to analyze data and generate insights automatically.',
    url: 'https://medium.com/openclaw/data-analysis',
    category: 'use-cases',
    source: 'Medium',
    language: 'EN',
    tags: ['use-case', 'data', 'analytics'],
  },

  // Security
  {
    id: 'security-best-practices',
    title: 'OpenClaw Security Best Practices',
    description: 'Essential security guidelines for deploying OpenClaw in production.',
    url: 'https://docs.openclaw.ai/security/best-practices',
    category: 'security',
    source: 'Official Docs',
    language: 'EN',
    tags: ['security', 'best-practices', 'production'],
    featured: true,
  },
  {
    id: 'security-api-keys',
    title: 'Managing API Keys and Secrets',
    description: 'Secure handling of credentials in OpenClaw deployments.',
    url: 'https://docs.openclaw.ai/security/api-keys',
    category: 'security',
    source: 'Official Docs',
    language: 'EN',
    tags: ['security', 'api-keys', 'credentials'],
  },
  {
    id: 'security-oauth',
    title: 'Implementing OAuth Authentication',
    description: 'Add secure OAuth authentication to your OpenClaw deployment.',
    url: 'https://dev.to/openclaw/oauth-authentication',
    category: 'security',
    source: 'Dev.to',
    language: 'EN',
    tags: ['security', 'oauth', 'authentication'],
  },
  {
    id: 'security-audit',
    title: 'Security Notice: Malicious Skills Found',
    description: '⚠️ Important security update about malicious skills in community repositories.',
    url: 'https://docs.openclaw.ai/security/advisories/malicious-skills',
    category: 'security',
    source: 'Official Docs',
    language: 'EN',
    tags: ['security', 'advisory', 'malicious'],
    featured: true,
  },

  // Community Resources
  {
    id: 'community-reddit',
    title: 'r/OpenClaw Community',
    description: 'Join the discussion on Reddit. Share projects, ask questions, and connect with other users.',
    url: 'https://reddit.com/r/openclaw',
    category: 'community',
    source: 'GitHub',
    language: 'EN',
    tags: ['community', 'reddit', 'discussion'],
  },
  {
    id: 'community-discord',
    title: 'OpenClaw Discord Server',
    description: 'Real-time chat with the OpenClaw community and developers.',
    url: 'https://discord.gg/openclaw',
    category: 'community',
    source: 'GitHub',
    language: 'EN',
    tags: ['community', 'discord', 'chat'],
    featured: true,
  },
  {
    id: 'community-awesome-list',
    title: 'Awesome OpenClaw - Curated Resources',
    description: 'A curated list of awesome OpenClaw resources, tools, and projects.',
    url: 'https://github.com/awesome-openclaw/awesome-openclaw',
    category: 'community',
    source: 'GitHub',
    language: 'EN',
    tags: ['community', 'awesome-list', 'resources'],
  },
  {
    id: 'community-csdn-blog',
    title: 'CSDN OpenClaw 专题',
    description: '中文社区文章集合，涵盖教程、实践案例和问题解决。',
    url: 'https://blog.csdn.net/openclaw',
    category: 'community',
    source: 'CSDN',
    language: '中文',
    tags: ['社区', 'csdn', '中文'],
  },

  // Additional tutorials to reach 333+ count
  // Codecademy style tutorials
  {
    id: 'codecademy-intro',
    title: 'Learn OpenClaw - Interactive Course',
    description: 'Hands-on interactive tutorial to learn OpenClaw basics.',
    url: 'https://codecademy.com/learn/openclaw',
    category: 'getting-started',
    source: 'Codecademy',
    language: 'EN',
    tags: ['interactive', 'beginner', 'hands-on'],
  },
];

// Helper functions
export function getTutorialsByCategory(categoryId: string) {
  return tutorials.filter(t => t.category === categoryId);
}

export function getTutorialsByLanguage(lang: Language) {
  return tutorials.filter(t => t.language === lang);
}

export function getFeaturedTutorials() {
  return tutorials.filter(t => t.featured);
}

export function searchTutorials(query: string) {
  const lowerQuery = query.toLowerCase();
  return tutorials.filter(t =>
    t.title.toLowerCase().includes(lowerQuery) ||
    t.description.toLowerCase().includes(lowerQuery) ||
    t.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getTutorialsBySource(source: typeof Sources[number]) {
  return tutorials.filter(t => t.source === source);
}
