declare global {
    interface Window {
      gtag?: (event: string, action: string, options: any) => void;
    }
  }
  
  export const GTM_ID = process.env.NEXT_PUBLIC_GTM;
  
  export const pageview = (url: string, GA_MEASUREMENT_ID?: string) => {
    if (!GA_MEASUREMENT_ID) return;
    if (window.location.hostname === "localhost") return;
    if (!window?.gtag) return;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  };