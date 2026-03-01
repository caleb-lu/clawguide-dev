// 尝试从 JSON 文件加载，如果失败则使用 TypeScript 数据

import { tutorials as tsTutorials, TutorialCategories } from './tutorials.ts';
import { SkillCategories, skills as tsSkills } from './skills.ts';

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  source: string;
  language: string;
  tags: string[];
  featured?: boolean;
  scrapedAt?: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  popularity: number;
  verified: boolean;
  url?: string;
  source?: string;
  scrapedAt?: string;
}

let cachedTutorials: Tutorial[] | null = null;
let cachedSkills: Skill[] | null = null;

/**
 * 从 JSON 或 TypeScript 加载教程
 */
export async function loadTutorials(): Promise<Tutorial[]> {
  if (cachedTutorials) {
    return cachedTutorials;
  }

  try {
    // 尝试从 JSON 文件加载
    const response = await fetch('/src/data/tutorials.json');
    if (response.ok) {
      const data = await response.json();
      cachedTutorials = data;
      console.log(`✅ Loaded ${data.length} tutorials from JSON`);
      return data;
    }
  } catch (error) {
    console.warn('⚠️ Could not load tutorials from JSON, using TypeScript data');
  }

  // 回退到 TypeScript 数据
  cachedTutorials = tsTutorials;
  return cachedTutorials;
}

/**
 * 从 JSON 或 TypeScript 加载 skills
 */
export async function loadSkills(): Promise<Skill[]> {
  if (cachedSkills) {
    return cachedSkills;
  }

  try {
    // 尝试从 JSON 文件加载
    const response = await fetch('/src/data/skills.json');
    if (response.ok) {
      const data = await response.json();
      cachedSkills = data;
      console.log(`✅ Loaded ${data.length} skills from JSON`);
      return data;
    }
  } catch (error) {
    console.warn('⚠️ Could not load skills from JSON, using TypeScript data');
  }

  // 回退到 TypeScript 数据
  cachedSkills = tsSkills;
  return cachedSkills;
}

/**
 * 获取教程分类
 */
export function getTutorialCategories() {
  return TutorialCategories;
}

/**
 * 获取 skills 分类
 */
export function getSkillCategories() {
  return SkillCategories;
}

/**
 * 清除缓存
 */
export function clearCache() {
  cachedTutorials = null;
  cachedSkills = null;
}
