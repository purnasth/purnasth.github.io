import React, { useEffect } from 'react';

interface DynamicTitleProps {
  defaultTitle: string; // The default title of the page
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ defaultTitle }) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User leaves the tab
        document.title = 'Come back :(';
      } else {
        // User returns to the tab
        document.title = 'Welcome :)';
        timeoutId = setTimeout(() => {
          document.title = defaultTitle; // Restore the default title after 3 seconds
        }, 3000);
      }
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      // Cleanup event listener and timeout
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, [defaultTitle]);

  return null; // This component doesn't render anything
};

export default DynamicTitle;