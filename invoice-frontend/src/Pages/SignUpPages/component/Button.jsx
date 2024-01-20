/* eslint-disable react/prop-types */
export default function Button({ text, style }) {
  return (
    <button
      type="submit"
      className={`${style} bg-mustard text-white text-center w-96 mt-10 py-4 px-10 rounded-md`}
    >
      {text}
    </button>
  );
}
