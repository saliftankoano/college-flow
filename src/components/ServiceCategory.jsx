export default function ServiceCategory(props) {
  return (
    <>
      <a href="#">
        <div className="w-[260px] ps-3  cursor-pointer">
          <img
            className="w-[100%] h-[85%] rounded-2xl ease-in transition-all hover:translate-y-[-.7rem]"
            src={props.link}
            alt={props.categoryName}
            loading="lazy"
          />
          <h3 className="uppercase text-white bg-black font-semibold text-center">
            {props.categoryName}
          </h3>
        </div>
      </a>
    </>
  );
}
