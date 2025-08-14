import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if(window.gtag && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  const trackButtonClick = (buttonId: string, buttonName: string) => {
    window.gtag('event', 'button_click', {
      button_id: buttonId,
      button_name: buttonName,
      page_path: pathname,
    });
  };

  const trackFormSubmission = (formId: string, formName: string, success: boolean) => {
    window.gtag('event', 'form_submission', {
      form_id: formId,
      form_name: formName,
      success: success,
      page_path: pathname,
    });
  };

  return {
    trackButtonClick,
    trackFormSubmission
  };
};