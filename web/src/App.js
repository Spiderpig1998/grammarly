import { useState } from "react";
import MainHeading from "./components/headings/MainHeading";
import SlateEditor from "./components/slateEditor/SlateEditor";
import ScoreCard from "./components/scoreCard/scoreCard";
import LoadingScreen from "./components/loading/LoadingScreen";
//styles
import styles from './styles/appStyles.module.css';
import SummaryCard from "./components/summaryCard/SummaryCard";
import ErrorScreen from "./components/error/ErrorScreen";
//CONSTANTS
const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const App = () => {
    const [scoreMetrics, setScoreMetrics] = useState({});
    const [summary, setSummary] = useState({});
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    let content;
    if (loading) {
        content = <LoadingScreen />;
    } else if (error) {
        content = <ErrorScreen error={error}/>;
    } else {
        content = <>
            <div className={styles['parent-div']}>
                <SlateEditor
                    value={value}
                    setScoreMetrics={setScoreMetrics}
                    setSummary={setSummary}
                    setLoading={setLoading}
                    setValue = {setValue}
                    setError = {setError}
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

        </>
    }
    return (
        <div className={styles['app']}>
            <MainHeading>Grammerly</MainHeading>
            {content}
        </div>
    )
}

export default App;
