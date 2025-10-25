import React from 'react';

const MagicButton = ({ children, href, className = '', ...props }) => {
  const handleClick = (e) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button ${className}`}
      {...props}
    >
      <div className="dots_border"></div>
      <div className="sparkle">
        <svg className="path" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
      <span className="text_button">{children}</span>
    </button>
  );
};

export default MagicButton;
