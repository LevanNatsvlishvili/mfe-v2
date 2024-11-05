import './Button.css';

const Button = ({ caption = 'Shared Button' }) => {
  return <button className="shared-btn">{caption}</button>;
};

export default Button;
