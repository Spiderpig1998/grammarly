import ScoreCardContent from './components/ScoreCardContent';
import styles from './styles/scorecard.module.css';

const ScoreCard = (props) => {
    const score = props.scoreMetrics;
    //don't render if score is empty
    if (Object.keys(score).length === 0) {
        return null;
    }

    const scoreArr = Object.entries(score);

    return (
        <div className={styles["scorecard"]}>
            <h2 className={styles["scorecard-title"]}>Readability Information</h2>
            <ScoreCardContent
                scores={scoreArr}
            />
        </div>
    )
}

export default ScoreCard