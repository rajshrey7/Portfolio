import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getFeaturedProjects = async () => {
  const response = await api.get('/projects/featured');
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

// Skills API
export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

export const getSkillsByCategory = async (category) => {
  const response = await api.get(`/skills/category/${category}`);
  return response.data;
};

// Contact API
export const sendContactMessage = async (data) => {
  const response = await api.post('/contact', data);
  return response.data;
};

// Legacy exports for backward compatibility
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getFeatured: () => api.get('/projects/featured'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

export const skillsAPI = {
  getAll: () => api.get('/skills'),
  getByCategory: (category) => api.get(`/skills/category/${category}`),
  create: (data) => api.post('/skills', data),
  update: (id, data) => api.put(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`),
};

export const contactAPI = {
  send: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact'),
  markAsRead: (id) => api.put(`/contact/${id}/read`),
};

export default api;
