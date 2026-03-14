import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-md bg-white">
      <div className="h-20 overflow-hidden">
        <img src={item?.image_url} alt="recipe item" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <span className="text-xs text-cyan-700 font-medium uppercase tracking-wide">
          {item?.publisher}
        </span>
        <h3 className="font-semibold text-sm text-black truncate">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
        className="px-3 py-1 text-xs border border-black rounded-full inline-block hover:bg-black hover:text-white transition-all duration-300 self-start mt-1"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}