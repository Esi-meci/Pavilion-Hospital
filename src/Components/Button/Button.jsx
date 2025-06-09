import { Link } from "react-router-dom";


// button functions 
function Button({ className, content, onClick, href, type = "button" }) {
  if (href) {
    
    if (href.startsWith("#")) {
      return (
        <a href={href} className={className}>
          {content}
        </a>
      );
    } else {
      return (
        <Link to={href} className={className}>
          {content}
        </Link>
      );
    }
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  );
}

export default Button;
