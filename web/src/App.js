import { useState } from "react";
import MainHeading from "./components/headings/MainHeading";
import SlateEditor from "./components/slateEditor/SlateEditor";
import ScoreCard from "./components/scoreCard/scoreCard";
//styles
import styles from './styles/appStyles.module.css';
import SummaryCard from "./components/summaryCard/SummaryCard";

const App = () => {
    const [scoreMetrics, setScoreMetrics] = useState({});
    const [summary, setSummary] = useState({});
    return (
        <div className={styles['app']}>
            <MainHeading>Grammarly</MainHeading>
            <div className={styles['parent-div']}>
                <SlateEditor
                    setScoreMetrics={setScoreMetrics}
                    setSummary={setSummary}
                />
            </div>
            <div className={styles['parent-div']}>
            <ScoreCard
                scoreMetrics={scoreMetrics}
            />
            </div>
            <div className={styles['parent-div']}>
                <SummaryCard
                    summaryInfo={summary}
                />
            </div>
        </div>
    )
}

export default App;
