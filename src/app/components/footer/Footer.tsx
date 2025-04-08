export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>© 2023 Your Company</p>
      <a href="/privacy-policy" className="text-blue-500 hover:underline">
        Privacy Policy
      </a>
      <a href="/terms-of-service" className="text-blue-500 hover:underline">
        Terms of Service
      </a>
    </footer>
  );
};
