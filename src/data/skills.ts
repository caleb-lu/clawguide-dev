// Skill categories with 31 categories as mentioned
export const SkillCategories = [
  { id: 'communication', name: 'Communication', icon: '💬', count: 156, color: 'bg-blue-100 text-blue-700' },
  { id: 'productivity', name: 'Productivity', icon: '⚡', count: 234, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'development', name: 'Development', icon: '💻', count: 189, color: 'bg-purple-100 text-purple-700' },
  { id: 'data-analysis', name: 'Data Analysis', icon: '📊', count: 145, color: 'bg-green-100 text-green-700' },
  { id: 'writing', name: 'Writing & Content', icon: '✍️', count: 198, color: 'bg-pink-100 text-pink-700' },
  { id: 'research', name: 'Research', icon: '🔍', count: 167, color: 'bg-indigo-100 text-indigo-700' },
  { id: 'automation', name: 'Automation', icon: '🤖', count: 212, color: 'bg-red-100 text-red-700' },
  { id: 'media', name: 'Media & Graphics', icon: '🎨', count: 134, color: 'bg-orange-100 text-orange-700' },
  { id: 'finance', name: 'Finance', icon: '💰', count: 98, color: 'bg-emerald-100 text-emerald-700' },
  { id: 'education', name: 'Education', icon: '📚', count: 176, color: 'bg-cyan-100 text-cyan-700' },
  { id: 'health', name: 'Health & Wellness', icon: '🏥', count: 87, color: 'bg-rose-100 text-rose-700' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎮', count: 143, color: 'bg-violet-100 text-violet-700' },
  { id: 'travel', name: 'Travel', icon: '✈️', count: 92, color: 'bg-sky-100 text-sky-700' },
  { id: 'food', name: 'Food & Cooking', icon: '🍳', count: 118, color: 'bg-amber-100 text-amber-700' },
  { id: 'shopping', name: 'Shopping', icon: '🛒', count: 105, color: 'bg-lime-100 text-lime-700' },
  { id: 'social', name: 'Social Media', icon: '📱', count: 167, color: 'bg-fuchsia-100 text-fuchsia-700' },
  { id: 'security', name: 'Security & Privacy', icon: '🔐', count: 78, color: 'bg-slate-100 text-slate-700' },
  { id: 'database', name: 'Database', icon: '🗄️', count: 124, color: 'bg-zinc-100 text-zinc-700' },
  { id: 'cloud', name: 'Cloud Services', icon: '☁️', count: 156, color: 'bg-neutral-100 text-neutral-700' },
  { id: 'devops', name: 'DevOps & CI/CD', icon: '🔧', count: 134, color: 'bg-stone-100 text-stone-700' },
  { id: 'testing', name: 'Testing & QA', icon: '🧪', count: 98, color: 'bg-teal-100 text-teal-700' },
  { id: 'documentation', name: 'Documentation', icon: '📖', count: 112, color: 'bg-blue-100 text-blue-700' },
  { id: 'api', name: 'API Integration', icon: '🔌', count: 189, color: 'bg-green-100 text-green-700' },
  { id: 'monitoring', name: 'Monitoring & Logging', icon: '📈', count: 87, color: 'bg-red-100 text-red-700' },
  { id: 'messaging', name: 'Messaging & Chat', icon: '💭', count: 145, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'email', name: 'Email Management', icon: '📧', count: 98, color: 'bg-purple-100 text-purple-700' },
  { id: 'calendar', name: 'Calendar & Scheduling', icon: '📅', count: 76, color: 'bg-pink-100 text-pink-700' },
  { id: 'project-mgmt', name: 'Project Management', icon: '📋', count: 134, color: 'bg-indigo-100 text-indigo-700' },
  { id: 'crm', name: 'CRM Integration', icon: '👥', count: 92, color: 'bg-orange-100 text-orange-700' },
  { id: 'ecommerce', name: 'E-commerce', icon: '🏪', count: 118, color: 'bg-emerald-100 text-emerald-700' },
  { id: 'iot', name: 'IoT & Smart Home', icon: '🏠', count: 67, color: 'bg-cyan-100 text-cyan-700' },
] as const;

export type SkillCategory = typeof SkillCategories[number];

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: SkillCategory['id'];
  popularity: number;
  verified: boolean;
}

// Sample skills - representing 1715+ skills across 31 categories
export const skills: Skill[] = [
  // Communication skills
  { id: 'slack-integration', name: 'Slack Integration', description: 'Post messages and interact with Slack', category: 'communication', popularity: 98, verified: true },
  { id: 'discord-bot', name: 'Discord Bot', description: 'Create and manage Discord bots', category: 'communication', popularity: 95, verified: true },
  { id: 'telegram-bot', name: 'Telegram Bot', description: 'Build Telegram chatbots', category: 'communication', popularity: 89, verified: true },
  { id: 'whatsapp-integration', name: 'WhatsApp Integration', description: 'Send and receive WhatsApp messages', category: 'communication', popularity: 92, verified: true },
  { id: 'email-sender', name: 'Email Sender', description: 'Send automated emails', category: 'communication', popularity: 88, verified: true },

  // Productivity skills
  { id: 'task-manager', name: 'Task Manager', description: 'Organize and track tasks', category: 'productivity', popularity: 94, verified: true },
  { id: 'note-taker', name: 'Note Taker', description: 'Smart note-taking and organization', category: 'productivity', popularity: 91, verified: true },
  { id: 'calendar-sync', name: 'Calendar Sync', description: 'Sync and manage calendar events', category: 'productivity', popularity: 87, verified: true },
  { id: 'file-organizer', name: 'File Organizer', description: 'Automatically organize files', category: 'productivity', popularity: 84, verified: true },
  { id: 'reminder-system', name: 'Reminder System', description: 'Set and manage reminders', category: 'productivity', popularity: 90, verified: true },

  // Development skills
  { id: 'code-reviewer', name: 'Code Reviewer', description: 'Automated code review assistant', category: 'development', popularity: 96, verified: true },
  { id: 'debug-helper', name: 'Debug Helper', description: 'Help debug code issues', category: 'development', popularity: 93, verified: true },
  { id: 'git-assistant', name: 'Git Assistant', description: 'Git workflow automation', category: 'development', popularity: 89, verified: true },
  { id: 'api-tester', name: 'API Tester', description: 'Test and validate APIs', category: 'development', popularity: 86, verified: true },
  { id: 'documentation-gen', name: 'Documentation Generator', description: 'Generate code documentation', category: 'development', popularity: 82, verified: true },

  // Data Analysis skills
  { id: 'csv-analyzer', name: 'CSV Analyzer', description: 'Analyze CSV files', category: 'data-analysis', popularity: 88, verified: true },
  { id: 'json-parser', name: 'JSON Parser', description: 'Parse and analyze JSON data', category: 'data-analysis', popularity: 91, verified: true },
  { id: 'data-visualizer', name: 'Data Visualizer', description: 'Create data visualizations', category: 'data-analysis', popularity: 85, verified: true },
  { id: 'excel-helper', name: 'Excel Helper', description: 'Work with Excel files', category: 'data-analysis', popularity: 87, verified: true },
  { id: 'sql-query-builder', name: 'SQL Query Builder', description: 'Build and execute SQL queries', category: 'data-analysis', popularity: 83, verified: true },

  // Writing skills
  { id: 'blog-writer', name: 'Blog Writer', description: 'Generate blog content', category: 'writing', popularity: 92, verified: true },
  { id: 'email-writer', name: 'Email Writer', description: 'Draft professional emails', category: 'writing', popularity: 89, verified: true },
  { id: 'social-post', name: 'Social Post Creator', description: 'Create social media posts', category: 'writing', popularity: 94, verified: true },
  { id: 'proofreader', name: 'Proofreader', description: 'Check and fix grammar', category: 'writing', popularity: 86, verified: true },
  { id: 'translator', name: 'Translator', description: 'Translate between languages', category: 'writing', popularity: 97, verified: true },

  // Research skills
  { id: 'web-searcher', name: 'Web Searcher', description: 'Search the web effectively', category: 'research', popularity: 95, verified: true },
  { id: 'paper-summarizer', name: 'Paper Summarizer', description: 'Summarize research papers', category: 'research', popularity: 88, verified: true },
  { id: 'fact-checker', name: 'Fact Checker', description: 'Verify claims and facts', category: 'research', popularity: 84, verified: true },
  { id: 'citation-helper', name: 'Citation Helper', description: 'Format citations', category: 'research', popularity: 81, verified: true },
  { id: 'trend-analyzer', name: 'Trend Analyzer', description: 'Analyze market trends', category: 'research', popularity: 83, verified: true },

  // Automation skills
  { id: 'workflow-automator', name: 'Workflow Automator', description: 'Automate repetitive tasks', category: 'automation', popularity: 96, verified: true },
  { id: 'webhook-trigger', name: 'Webhook Trigger', description: 'Trigger webhooks', category: 'automation', popularity: 89, verified: true },
  { id: 'scheduled-job', name: 'Scheduled Job Runner', description: 'Run scheduled tasks', category: 'automation', popularity: 92, verified: true },
  { id: 'form-processor', name: 'Form Processor', description: 'Process form submissions', category: 'automation', popularity: 85, verified: true },
  { id: 'batch-processor', name: 'Batch Processor', description: 'Process data in batches', category: 'automation', popularity: 82, verified: true },

  // Media skills
  { id: 'image-resizer', name: 'Image Resizer', description: 'Resize and crop images', category: 'media', popularity: 87, verified: true },
  { id: 'video-transcriber', name: 'Video Transcriber', description: 'Transcribe video audio', category: 'media', popularity: 84, verified: true },
  { id: 'thumbnail-gen', name: 'Thumbnail Generator', description: 'Generate video thumbnails', category: 'media', popularity: 80, verified: true },
  { id: 'audio-converter', name: 'Audio Converter', description: 'Convert audio formats', category: 'media', popularity: 78, verified: true },
  { id: 'meme-generator', name: 'Meme Generator', description: 'Create memes', category: 'media', popularity: 85, verified: true },

  // Security skills
  { id: 'password-gen', name: 'Password Generator', description: 'Generate secure passwords', category: 'security', popularity: 91, verified: true },
  { id: 'encryption-helper', name: 'Encryption Helper', description: 'Encrypt and decrypt data', category: 'security', popularity: 85, verified: true },
  { id: 'audit-logger', name: 'Audit Logger', description: 'Log security events', category: 'security', popularity: 79, verified: true },
  { id: 'permission-checker', name: 'Permission Checker', description: 'Check user permissions', category: 'security', popularity: 82, verified: true },

  // Cloud skills
  { id: 'aws-s3', name: 'AWS S3 Manager', description: 'Manage S3 buckets', category: 'cloud', popularity: 93, verified: true },
  { id: 'gcp-storage', name: 'GCP Storage', description: 'Google Cloud storage', category: 'cloud', popularity: 86, verified: true },
  { id: 'azure-blob', name: 'Azure Blob Storage', description: 'Azure storage management', category: 'cloud', popularity: 84, verified: true },
  { id: 'cloudflare-r2', name: 'Cloudflare R2', description: 'Cloudflare R2 storage', category: 'cloud', popularity: 81, verified: true },
];

// Helper functions
export function getSkillsByCategory(categoryId: string) {
  return skills.filter(s => s.category === categoryId);
}

export function getTopSkills(limit = 10) {
  return [...skills].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}

export function getVerifiedSkills() {
  return skills.filter(s => s.verified);
}

export function searchSkills(query: string) {
  const lowerQuery = query.toLowerCase();
  return skills.filter(s =>
    s.name.toLowerCase().includes(lowerQuery) ||
    s.description.toLowerCase().includes(lowerQuery)
  );
}

export function getSkillCategory(categoryId: string) {
  return SkillCategories.find(c => c.id === categoryId);
}
