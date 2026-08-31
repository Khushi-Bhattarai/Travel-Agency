import './Button.css';

function Button({ children, type= "button", href }) {

    if (href) {
        return (
            <a href={href}>
                {children}
            </a>
        );
    }

    return (
        <button type={type}>
            {children}
        </button>
    )
}

export default Button