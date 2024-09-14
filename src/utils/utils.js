export const copyToClipboard = ({text, setCopySuccess}) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };