import React from 'react';
import styles from './ModalStyles.module.scss';  // Import the SCSS module

interface ownProps {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
    children?: React.ReactNode;
}

const ModalWindow: React.FC<ownProps> = ({ isActive, setIsActive, children }) => {
    const closeWindow = () => setIsActive(false);
    return (
        isActive ?
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <div className={styles.closeButtonWrapper}>
                        <button onClick={closeWindow} className={styles.closeButton}>x</button>
                    </div>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </div>
            </div>
            : null
    );
};

export default ModalWindow;
