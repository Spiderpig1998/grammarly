//IMPORTS
import React, { useState, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { onKeyDown, renderLeaf, serialize, getTextInfo } from './utils/slateUtils'

//STYLES
import styles from './styles/editorStyles.module.css'
import SendButton from './components/SendButton'


/**
 * @param {function} setValue - Sets the value of the editor
 * @param {object} value - The value of the editor
 * @param {function} setCount - Sets the count of the editor
 * @param {object} editor - The editor object
 */
const onChangeHandler = (setValue, value) => {
    setValue(value);
}

const onClickHandler = async (value, setScoreMetrics, setSummary, setLoading, setError) => {
    const serialized = serialize({ children: value });
    setLoading(true);
    const result = await getTextInfo(serialized);
    setLoading(false);
    if (result.error) {
        setError(true);
        return;
    }
    let textInfo = result.data;
    setScoreMetrics(textInfo.scoreCard);
    setSummary(textInfo.summary);
}

const SlateEditor = (props) => {
    const { setScoreMetrics, setSummary, setLoading, value, setValue, setError } = props;
    // Create a Slate editor object that won't change across renders.
    const editor = useMemo(() => withReact(createEditor()), [])
    // Render the Slate context.
    return (
        <>
            <div className={styles['slate-editor']}>
                <Slate editor={editor} value={value} onChange={value => onChangeHandler(setValue, value)}>
                    <Editable
                        onKeyDown={event => onKeyDown(event, editor, () => { })}
                        renderLeaf={props => renderLeaf(props)}
                    />
                </Slate>
            </div>
            <div className={styles["button-div"]}>
                <SendButton
                    heading="Send"
                    onClick = {() => onClickHandler(value, setScoreMetrics, setSummary, setLoading, setError)}
                />
            </div>
        </>


    )
}

export default SlateEditor;