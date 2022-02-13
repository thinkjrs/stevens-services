export default function CallNowButton({ buttonText, buttonHref }) {
  return (
    <a
      href={buttonHref}
      className="my-8 flex uppercase items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-black shadow-sm hover:bg-gray-100 hover:text-black sm:px-8"
    >
      {buttonText}
    </a>
  );
}
