import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function TestimonialCard({
  bgColor,
  textColor,
  quote,
  author,
  role,
  icon,
}) {
  const renderIcon = () => {
    switch (icon) {
      case 'twitter':
        return <FaTwitter size={25} color="#1DA1F2" />;
      case 'instagram':
        return <FaInstagram size={25} color="#E4405F" />;
      case 'facebook':
        return <FaFacebook size={25} color="#1877F2" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="w-[330px] md:w-full rounded-2xl px-[2px] py-[2px] flex flex-col justify-center md:justify-between mx-auto"
      style={{ backgroundColor: '#f3f3f3ff', color: '#000' }}
    >
      <p
        className="text-lg h-48 leading-relaxed opacity-90 p-4 shadow text-white font-semibold"
        style={{ backgroundColor: bgColor }}
      >
        {quote}
      </p>

      <div className="flex items-end justify-between my-4 p-2">
        <div>
          <p className="text-md font-semibold">{author}</p>
          <p className="text-xs opacity-60">{role}</p>
        </div>

        <div className="text-sm opacity-80">{renderIcon()}</div>
      </div>
    </div>
  );
}
