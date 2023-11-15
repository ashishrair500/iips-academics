import { useState } from "react";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeEditor.css";
const CodeEditor = ({fileName = "index.txt",data,setData}) => {
   

    
    const codes = {
            html : "xml",
            php : "php",
            js : "javascript",
            jsx : "jsx",
            txt:"textfile",
            xml : "xml",
            css : "css",
            c : "c",
            cpp : "cpp",
            java : "java",
            py : "python",
            json : "json",
            sql : "sql",
    };
    let languageType = fileName && typeof fileName === 'string' ? codes[fileName.split(".")[1]] : "textfile";
    const handleKeyDown = (evt) => {
        let value=content,
        selStartPos = evt.currentTarget.selectionStart;
        console.log(evt.currentTarget);
        if(evt.key === "Tab"){
            value =
             value.substring(0, selStartPos) +
              "   " +
               value.substring(selStartPos, value.length);
            evt.currentTarget.selectionStart = selStartPos + 3;
            evt.currentTarget.selectionEnd = selStartPos + 3;
            evt.preventDefault();
            setData(value);
        }
    }
    return (
        
        <div className="row px-5 mt-3">
        <div  className="col-md-12 mx-auto code-edit-container p-3">
        <textarea
        className="code-input w-100"
        value = {data}
        // onKeyDown={handleKeyDown}
        onChange={(e) => setData(e.target.value)}
        />

        <pre className="code-output">
        
        <SyntaxHighlighter 
        language={languageType} 
        showLineNumbers = {true}
        style={atomDark}
        wrapLines={true}
        startingLineNumber={1}

        >
        {data}
        </SyntaxHighlighter>


        </pre>


        </div>
            
        </div>
    )
}

export default CodeEditor