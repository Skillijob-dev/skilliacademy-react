import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const buttonClasses = `btn btn-${variant} btn-${size} ${className}`.trim();

  // Si c'est un lien externe (http/https/tel/mailto)
  if (href && (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:'))) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Si c'est un lien interne React Router
  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Sinon, c'est un bouton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
