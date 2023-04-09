import styles from '../styles/scorecard.module.css'


const formatText = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    
    return finalResult;
}

const ScoreCardItem = (props) => {
    const { heading, content } = props;
    return (
        <div className={styles["scorecard-item"]}>
            <div className={styles["scorecard-item-value"]}>{formatText(heading)}</div>
            <div className={styles["scorecard-item-label"]}>{content}</div>
        </div>
    )
}

export default ScoreCardItem;