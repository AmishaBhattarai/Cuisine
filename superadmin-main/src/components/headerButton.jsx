import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import { headerButtonProps } from "./props/headerButton";

export default function HeaderButton({
  childrens,
  popupContent,
}) {
  const [profile, setProfile] = useState(false);
  const linkRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      linkRef.current &&
      !linkRef.current.contains(event.target)
    ) {
      setProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, []);

  return (
    <li className="relative" ref={linkRef}>
      <button
        onClick={() => setProfile(!profile)}
        className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-green-400 focus:outline-none "
        href="#"
      >
        {childrens}
      </button>
      {profile && (
        <ul
          className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-green-400 border border-green-500 rounded-md shadow-md"
          aria-label="submenu"
        >
          {popupContent}
        </ul>
      )}
    </li>
  );
}

HeaderButton.propTypes = headerButtonProps;
