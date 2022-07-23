import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [filter, setFilter] = React.useState("");
  const [isFiltered, setIsFiltered] = React.useState(false);

  const handleOnChange = function (event) {
    event.preventDefault();

    const titleFilter = event.target.value;
    setFilter(titleFilter);
    if (titleFilter.length > 2) {
      props.onFilterByTitle(
        titleFilter,
        (page) => agent.Items.byTitle(titleFilter, page),
        agent.Items.byTitle(titleFilter)
      );
      setIsFiltered(true);
    } else if (isFiltered) {
      props.onFilterByTitle(
        "",
        (page) => agent.Items.byTitle("", page),
        agent.Items.byTitle("")
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A Place to get </span>
          <div>
            <input
              id="search-box"
              type="text"
              placeholder="What is it that you truly desire?"
              value={filter}
              onChange={(event) => handleOnChange(event)}
            />
            <i className="ion-search"></i>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
