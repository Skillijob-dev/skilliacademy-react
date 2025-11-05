import React from 'react';
import './PartnerLogo.css';

const PartnerLogo = ({ name, domain, color, src, alt, className = '', ...props }) => {
  // Si une image est fournie, l'afficher
  if (src) {
    return (
      <div className={`partner-logo ${className}`.trim()} {...props}>
        <img src={src} alt={alt || name} />
      </div>
    );
  }

  // Sinon, afficher un placeholder avec le nom et la couleur
  return (
    <div
      className={`partner-logo partner-logo-placeholder ${className}`.trim()}
      style={{ borderColor: color }}
      {...props}
    >
      <div className="partner-logo-initial" style={{ background: color }}>
        {name ? name.charAt(0) : '?'}
      </div>
      {domain && <span className="partner-domain">{domain}</span>}
    </div>
  );
};

export default PartnerLogo;
