import styles from '../styles/scorecard.module.css'
import ScoreCardItem from './ScoreCardItem';

const ScoreCardContent = (props) => {
    const { scores } = props;
    return (
        <div className={styles["scorecard-content"]}>
            {
                scores.map((score) => {
                    return (
                        <ScoreCardItem
                            heading={score[0]}
                            content={score[1]}
                        />
                    )
                })
            }
        </div>
    )
}

export default ScoreCardContent;