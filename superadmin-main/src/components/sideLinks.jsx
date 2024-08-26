import React from "react";
import { Link } from "react-router-dom";
import { sideLinkProps } from "./props/sideLinks";

export function SideLinks({
  title,
  link,
  childrens,
}) {
  return (
    <li className="relative px-2 py-1 ">
      <Link
        className="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 cursor-pointer hover:text-green-500"
        to={link}
      >
        {childrens}
        <span className="ml-4 uppercase">
          {title}
        </span>
      </Link>
    </li>
  );
}

SideLinks.propTypes = sideLinkProps;
