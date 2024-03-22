const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-[#0a1930] text-[#E1E5EB] py-8">
      &copy; {year} All Rights Reserved
    </div>
  );
};

export default Footer;
