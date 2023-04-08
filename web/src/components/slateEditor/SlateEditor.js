//IMPORTS
import React, { useState, useMemo } from 'react'
import { createEditor, Editor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { onKeyDown, renderLeaf } from './utils/slateUtils'

//STYLES
import styles from './styles/editorStyles.module.css'
import SendButton from './components/SendButton'
//CONSTANTS
const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

/**
 * @param {function} setValue - Sets the value of the editor
 * @param {object} value - The value of the editor
 * @param {function} setCount - Sets the count of the editor
 * @param {object} editor - The editor object
 */
const onChangeHandler = (setValue, value, setCount, editor) => {
    const strLength = Editor.string(editor).length;
    setValue(value);
    setCount(strLength);
}

const SlateEditor = () => {
    // Create a Slate editor object that won't change across renders.
    const editor = useMemo(() => withReact(createEditor()), [])
    // Keep track of state for the value of the editor.
    const [value, setValue] = useState(initialValue)
    const [count, setCount] = useState(0);
    // Render the Slate context.
    return (
        <div className={styles['parent-div']}>
            <div className={styles['slate-editor']}>
                <Slate editor={editor} value={value} onChange={value => onChangeHandler(setValue, value, setCount, editor)}>
                    <Editable
                        onKeyDown={event => onKeyDown(event, editor, () => { })}
                        renderLeaf={props => renderLeaf(props)}
                    />
                </Slate>
            </div>
            <div className={styles["button-div"]}>
                <SendButton
                    heading="Send"
                />
            </div>
        </div>



    )
}

export default SlateEditor;