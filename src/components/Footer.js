// Footer component
const Footer = () => {
  return (
    <footer className="bg-custom-darker-brown p-4 text-white text-center relative bottom-0 w-full">
      <p className="text-custom-peach">
        © {new Date().getFullYear()} Flowers and Flavor. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
