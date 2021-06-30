import React from "react";

// In prop types the value can be specified for each prop - being value, text, and color. To bring in propTypes use impt with react extention which will automatically import propType. Then define the values below the function near defaultProps. This is like a warning sign for passing the correct data types, as the application will still work, but in the console we can see a warning if we use an invalide prope type.
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/** span to represent each one of the stars with an icon - each star is either full, emty or half colored, which ever one we use depends on the rating given. There is a i tag with a className that will depend on the value of the rating using a turnary operator */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      {/** double && is an AND operator which means if there is text, then show text. */}
      <span>{text && text}</span>
    </div>
  );
};
// To set a default prop value is to be written below the component. It says the name of the function/component which is Rating, set to DefaultProps.

Rating.defaultProps = {
  color: "#f8e825",
};

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
