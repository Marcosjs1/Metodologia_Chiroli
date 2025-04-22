import { FC } from "react"
import styles from "./Input.module.css"

interface inputProps {
    label: string,
    name:string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string | undefined
}

export const Input: FC<inputProps> = ({label,name,type,value,onChange, error, onBlur}) => {
    return (
        <div className={styles.containerInputs} >
            <label htmlFor={name}>{label}</label>
            <br />
            <input 
                id={name}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                
            />
            {error && <div>{error}</div>}
        </div>
    )
}
