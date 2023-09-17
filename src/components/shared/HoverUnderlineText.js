

const HoverUnderlineText = ({text, className}) => {
    return (
        <span
            className={`bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-no-repeat
                        bg-left-bottom transition-[background-size] duration-500 ${className}`}
        >
            {text}
        </span>
    );
};

export default HoverUnderlineText;