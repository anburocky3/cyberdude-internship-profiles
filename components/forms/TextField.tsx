export default function TextField({ ...rest }) {
  return (
    <input
      type="text"
      className="bg-gray-200 rounded px-4 py-2 w-full outline-none"
      {...rest}
    />
  );
}
