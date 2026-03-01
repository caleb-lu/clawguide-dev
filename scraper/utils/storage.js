import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../../src/data');
const RAW_DATA_DIR = path.join(__dirname, '../data/raw');

// 确保目录存在
fs.mkdirSync(RAW_DATA_DIR, { recursive: true });

/**
 * 读取现有教程数据
 */
export function loadTutorials() {
  try {
    const filePath = path.join(DATA_DIR, 'tutorials.json');
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading tutorials:', error.message);
    return [];
  }
}

/**
 * 保存教程数据
 */
export function saveTutorials(tutorials) {
  const filePath = path.join(DATA_DIR, 'tutorials.json');
  const backupPath = path.join(RAW_DATA_DIR, `tutorials-backup-${Date.now()}.json`);

  try {
    // 备份旧数据
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // 保存新数据
    fs.writeFileSync(filePath, JSON.stringify(tutorials, null, 2), 'utf-8');
    console.log(`✅ Saved ${tutorials.length} tutorials to tutorials.json`);
    return true;
  } catch (error) {
    console.error('Error saving tutorials:', error.message);
    return false;
  }
}

/**
 * 读取现有 skills 数据
 */
export function loadSkills() {
  try {
    const filePath = path.join(DATA_DIR, 'skills.json');
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading skills:', error.message);
    return [];
  }
}

/**
 * 保存 skills 数据
 */
export function saveSkills(skills) {
  const filePath = path.join(DATA_DIR, 'skills.json');
  const backupPath = path.join(RAW_DATA_DIR, `skills-backup-${Date.now()}.json`);

  try {
    // 备份旧数据
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // 保存新数据
    fs.writeFileSync(filePath, JSON.stringify(skills, null, 2), 'utf-8');
    console.log(`✅ Saved ${skills.length} skills to skills.json`);
    return true;
  } catch (error) {
    console.error('Error saving skills:', error.message);
    return false;
  }
}

/**
 * 追加新的教程（避免重复）
 */
export function appendTutorials(newTutorials) {
  const existing = loadTutorials();
  const existingIds = new Set(existing.map(t => t.id));

  const unique = newTutorials.filter(t => !existingIds.has(t.id));
  const merged = [...existing, ...unique];

  saveTutorials(merged);
  console.log(`➕ Added ${unique.length} new tutorials`);
  return unique.length;
}

/**
 * 追加新的 skills（避免重复）
 */
export function appendSkills(newSkills) {
  const existing = loadSkills();
  const existingIds = new Set(existing.map(s => s.id));

  const unique = newSkills.filter(s => !existingIds.has(s.id));
  const merged = [...existing, ...unique];

  saveSkills(merged);
  console.log(`➕ Added ${unique.length} new skills`);
  return unique.length;
}

/**
 * 保存爬取的原始数据（用于调试）
 */
export function saveRawData(source, data) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(RAW_DATA_DIR, `${source}-${timestamp}.json`);

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`💾 Raw data saved to ${filePath}`);
  } catch (error) {
    console.error('Error saving raw data:', error.message);
  }
}

/**
 * 获取统计信息
 */
export function getStats() {
  const tutorials = loadTutorials();
  const skills = loadSkills();

  return {
    tutorials: {
      total: tutorials.length,
      byCategory: {},
      byLanguage: {},
      bySource: {}
    },
    skills: {
      total: skills.length,
      byCategory: {}
    }
  };
}
