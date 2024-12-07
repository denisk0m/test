import React from 'react';
import styles from "./InputStyles.module.scss"
interface InputProps {
    type?: string; // Allow any input type (text, email, etc.)
    label?: string;
    placeholder?: string;
    name: string; // name is required for proper form handling
    onChange: (e:any) => void;
    className?: string;
    value: string | number;
}

const Input: React.FC<InputProps> = ({type, label, placeholder, name, onChange, value}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                id={name} // Add the id to associate label with input
                value={value}
            />
        </div>
    );
};

export default Input;