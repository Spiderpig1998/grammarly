import styles from '../styles/sendButton.module.css'
import { FaPaperPlane } from 'react-icons/fa';

const SendButton = (props) => {
    const { onClick, heading } = props;
    return (
        <button className={styles["send-button"]} >
            {heading}
            <FaPaperPlane className="send-icon" />
        </button>
    );
}

export default SendButton;  