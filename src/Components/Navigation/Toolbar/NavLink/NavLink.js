import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavLink.module.scss';

const NavLink = props => {
  return (
    <li>
      <Link to={`/${props.url}`}>
        {props.url[0].toUpperCase() + props.url.slice(1)}
      </Link>
    </li>
  );
};

NavLink.propTypes = { url: PropTypes.string };

export default NavLink;
