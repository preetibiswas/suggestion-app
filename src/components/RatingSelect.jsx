import React, { useEffect, useState } from "react";
import { useContext } from "react";
import SuggestionContext from "../context/SuggestionContext";

const RatingSelect = ({select}) => {
  const [selected, setSelected] = useState(10);
  const { suggestionEdit } =useContext(SuggestionContext)


  useEffect(()=>{
  
      setSelected(suggestionEdit.item.rating)

    

  },[suggestionEdit])


  const handleChange = (e) => {
    console.log(+e.currentTarget.value)
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)


  };
  return (
    <ul className="rating">
      <li>
        <input
        checked={selected===1}
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
        checked={selected===2}
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
        checked={selected===3}
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
        checked={selected===4}
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
        checked={selected===5}
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
        checked={selected===6}
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleChange}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
        checked={selected===7}
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleChange}
        />
        <label htmlFor="num7">7</label>
      </li>

      <li>
        <input
        checked={selected===8}
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleChange}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
        checked={selected===9}
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleChange}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
        checked={selected===10}
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleChange}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
