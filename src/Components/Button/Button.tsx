import "./button.css"
interface IButtonProps {
  text: string;
  bgColor: string;
  color: string;
  width:string;
  disabled?:any
  onClick?: () => void;
}

const Button:React.FC<IButtonProps> = (props) => {
  const { text, bgColor, color,width,onClick,disabled } = props;
  return (
    <>
      <button className="btn" disabled={disabled} onClick={onClick} style={{backgroundColor:bgColor,color:color,width:width}}>{text}</button>
    </>
  );
};

export default Button;
