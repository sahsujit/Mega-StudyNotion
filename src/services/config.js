const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return "https://mega-studynotion.onrender.com/api/v1";
    }
    return "http://localhost:4000/api/v1";
  };
  
  export const BASE_URL = getBaseUrl();
  
