/**
 * GitHub API service to fetch repositories
 */
const GITHUB_API = 'https://api.github.com';

/**
 * Fetch user repositories from GitHub
 * @param {string} username - GitHub username
 * @returns {Promise} Array of repositories
 */
export const fetchGitHubRepos = async (username = 'rajshrey7') => {
  try {
    const response = await fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Transform GitHub repository to portfolio project format
 * @param {Object} repo - GitHub repository object
 * @returns {Object} Formatted project object
 */
export const transformRepoToProject = (repo) => {
  // Extract technologies from topics or language
  const technologies = [
    repo.language,
    ...(repo.topics || [])
  ].filter(Boolean);

  // Determine category based on repository
  let category = 'other';
  if (repo.topics) {
    if (repo.topics.some(t => ['web', 'website', 'frontend'].includes(t.toLowerCase()))) {
      category = 'web';
    } else if (repo.topics.some(t => ['mobile', 'react-native', 'flutter'].includes(t.toLowerCase()))) {
      category = 'mobile';
    } else if (repo.topics.some(t => ['fullstack', 'mern', 'mean', 'full-stack'].includes(t.toLowerCase()))) {
      category = 'fullstack';
    }
  }

  return {
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || 'A project showcasing modern development practices.',
    technologies: technologies.length > 0 ? technologies : ['JavaScript'],
    imageUrl: '',
    liveUrl: repo.homepage || '',
    githubUrl: repo.html_url,
    featured: repo.stargazers_count > 0 || repo.fork === false,
    category: category,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at
  };
};

/**
 * Fetch and transform GitHub repositories for portfolio
 * @param {string} username - GitHub username
 * @returns {Promise} Array of formatted projects
 */
export const getGitHubProjects = async (username = 'rajshrey7') => {
  const repos = await fetchGitHubRepos(username);
  // Filter out forks and transform to projects
  const projects = repos
    .filter(repo => !repo.fork || repo.stargazers_count > 0) // Include original repos or starred forks
    .map(transformRepoToProject)
    .sort((a, b) => {
      // Sort by featured first, then by stars, then by updated date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.stars !== b.stars) return b.stars - a.stars;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  
  return projects;
};

