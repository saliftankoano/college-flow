import ServiceCategory from "./ServiceCategory";
import ai from "../assets/categories/ai.webp";
import animation from "../assets/categories/animation.webp";
import design from "../assets/categories/design.webp";
import digital_marketing from "../assets/categories/marketing.webp";
import web from "../assets/categories/programming.webp";

export default function Services() {
  const categories = [
    "Animation & Video",
    "Artificial Intelligence",
    "Design & Graphics",
    "Digital Marketing",
    "Web development",
  ];
  const categories_imgs = [animation, ai, design, digital_marketing, web];
  return (
    <div className="w-[100%] mt-7 categories inline-flex flex-wrap ps-[4%] pe-[4%] bg-[#000000]">
      {categories.map((category, index) => (
        <ServiceCategory
          key={index}
          link={categories_imgs[index]}
          categoryName={category}
        />
      ))}
    </div>
  );
}
