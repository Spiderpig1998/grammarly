import TextLists from "./components/TextLists";
import styles from "./styles/summaryCard.module.css";


const SummaryCard = (props) => {
    const { summaryInfo } = props;
    if (Object.keys(summaryInfo).length === 0) {
        return null;
    }

    const summary = summaryInfo.summary;
    return (
        <div className={styles['summaryCard']}>
            <h2 className={styles["summaryCard-title"]}>Summary</h2>
            <TextLists
                items={summary}
            />
        </div>
    )
}

export default SummaryCard;