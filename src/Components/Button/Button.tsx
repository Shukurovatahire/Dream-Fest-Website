import "./button.css"
interface IButtonProps {
  text: string;
  bgColor: string;
  color: string;
  disabled?:any
  className?:string;
  onClick?: () => void;
}

const Button:React.FC<IButtonProps> = (props) => {
  const { text, bgColor, color,onClick,disabled ,className} = props;
  return (
    <>
      <button className={`btn ${className}`} disabled={disabled} onClick={onClick} style={{backgroundColor:bgColor,color:color}}>{text}</button>
    </>
  );
};

export default Button;
