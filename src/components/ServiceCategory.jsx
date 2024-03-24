import image from "../assets/categories/ai.png";
export default function ServiceCategory() {
  return (
    <>
      <div className="h-[345px] w-[245px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg h-full" src={image} alt="" />
        </a>
      </div>
    </>
  );
}
