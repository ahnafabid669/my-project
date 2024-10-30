const Fetch = ({ photo }) => {
  console.log({ photo });
  const { name, img, age } = photo;
  return (
    <div className=" p-8">
      <h2 className="text-xl font-bold">name : {name}</h2>
      <h2 className="text-lg font-semibold">pooularity : {age}</h2>
      <img
        className="m-3 p-2 w-9/12 md:w-9/12 mx-auto rounded-2xl"
        src={img}
        alt=""
      />
      <p className="text-sm text-left pl-2 md:w-9/12 mx-auto">
        <span className="text-md font-bold"> About :</span>
        <br />
        Nature is a vast and beautiful tapestry that supports all forms of life,
        from towering trees to flowing rivers and endless skies. It provides the
        air we breathe, the food we eat, <br /> and the beauty that inspires us
        Animals, as an essential part of nature, bring balance to ecosystems.
        From the smallest insects to the largest mammals, each species plays a
        role in maintaining the natural world. Animals contribute to
        biodiversity, <br /> pollinate plants, and even help in seed dispersal.
        Our connection with both nature and animals is vital, reminding us of
        the delicate balance that sustains all life on Earth
      </p>
    </div>
  );
};

import PropTypes from "prop-types";

Fetch.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.element,
    age: PropTypes.element,
  }).isRequired,
};
export default Fetch;
