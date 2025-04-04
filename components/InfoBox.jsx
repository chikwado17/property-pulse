import Link from "next/link";

const InfoBox = ({ children, title, buttonInfo, cardBg }) => {
  return (
    <div className={`${cardBg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={buttonInfo.href}
        className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
