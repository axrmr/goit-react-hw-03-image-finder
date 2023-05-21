import Btn from './Button.styled';

const Button = ({ children, ...props }) => {
    return <Btn {...props}>{children}</Btn>;
};

export default Button;
