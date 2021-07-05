import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLink.scss';

type NavigationLinkProps = {
  text: string;
  path: string;
};

export default function NavigationLink({ text, path }: NavigationLinkProps): JSX.Element {
  return (
    <NavLink to={path} className="nav-link">
      <li>{text}</li>
    </NavLink>
  );
}
