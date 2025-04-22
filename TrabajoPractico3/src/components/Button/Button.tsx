import { ButtonHTMLAttributes, FC } from "react"
import styles from "./Button.module.css"
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
    children: React.ReactNode
    
}
export const Button: FC<IButton> = ({onClick, children, ...props}: IButton) => {
    
    
    
    return (
        <div className={styles.containerButtons}>
            <button className={styles.button} {...props} type="submit" onClick={onClick}>{children}</button>

        </div>
        
    )
}

export default Button