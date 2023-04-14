import { BoldMark, ItalicMark } from "../components/Marks";
import { Transforms, Text, Editor } from "slate";
import escapeHtml from 'escape-html'

//CONSTANTS
const FETCH_URL = 'http://localhost:8000/text-info'
//FUNCTIONS
//updates all text nodes in the editor to have the given type
const setTxtType = (editor, type) => {
    //check if any nodes match criteria
    const [match] = Editor.nodes(editor, {
        match: n => n[type] === true,
        universal: true,
    });
    //update new nodes
    const isActive = !!match;
    Transforms.setNodes(
        editor,
        { [type]: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
    );
}


export const onKeyDown = (event, editor, next) => {
    //if not ctrl or cmnd key pressed, do nothing
    if (!event.metaKey) return next();
    //prevent default behavior
    switch (event.key) {
        case 'b': {
            event.preventDefault();
            setTxtType(editor, 'bold');
            return true;
        }
        case 'i': {
            event.preventDefault();
            setTxtType(editor, 'italic');
            return true;
        }
    };
}


//RENDER
export const renderLeaf = props => {

    if (props.leaf.bold) {
        return <BoldMark {...props} />;
    }
    if (props.leaf.italic) {
        return <ItalicMark {...props} />;
    }
    return <span {...props.attributes}>{props.children}</span>;
}

//SERIALIZATION
export const serialize = node => {
    if (Text.isText(node)) {
        let string = escapeHtml(node.text)
        return string
    }

    const children = node.children.map(n => serialize(n)).join('')
    return children;
}


//send to the backend
export const getTextInfo = async (input) => {
    const res = await fetch(FETCH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: input })
    })
    const data = await res.json()
    //if error, return error
    if (res.status === 400) {
        return {
            error: true,
            data: data
        }
    }

    return {
        error: false,
        data: data
    }
}