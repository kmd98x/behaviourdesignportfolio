// Helper to get the correct image path with basePath
export function getImagePath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get basePath from environment or use default
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Return path with basePath prefix
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
