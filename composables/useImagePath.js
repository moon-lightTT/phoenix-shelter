export const useImagePath = () => {
  const baseURL = '/phoenix-shelter'
  
  const getImagePath = (path) => {
    if (!path) return ''
    if (path.startsWith('http')) return path
    if (path.startsWith(baseURL)) return path
    return `${baseURL}${path.startsWith('/') ? path : '/' + path}`
  }
  
  return { getImagePath }
}