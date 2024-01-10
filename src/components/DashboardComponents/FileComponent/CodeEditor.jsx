import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";
import { shallowEqual, useSelector } from "react-redux";

const CodeEditor = ({ fileName, data, setData }) => {
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }), shallowEqual);

  const getCodeLanguage = (fileExtension) => {
    const codeMappings = {
      html: "xml",
      php: "php",
      js: "javascript",
      jsx: "jsx",
      txt: "textile",
      xml: "xml",
      css: "css",
      c: "clike",
      cpp: "clike",
      java: "java",
      cs: "clike",
      py: "python",
      json: "javascript",
      docx: "docx",
      doc: "doc",
    };
    return codeMappings[fileExtension] || 'plaintext';
  };

  return (
    <div className="code-editor-row">
      <div className="code-editor-container">
        {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (
          <>
            <textarea
              className="code-input"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <pre className="code-output">
              <SyntaxHighlighter
                language={getCodeLanguage(fileName.split(".")[1])}
                showLineNumbers
                style={duotoneLight}
                wrapLines
                startingLineNumber={1}
              >
                {data}
              </SyntaxHighlighter>
            </pre>
          </>
        ) : (
          <>
            <pre className="code-output">
              <SyntaxHighlighter
                language={getCodeLanguage(fileName.split(".")[1])}
                showLineNumbers
                style={duotoneLight}
                wrapLines
                startingLineNumber={1}
              >
                {data}
              </SyntaxHighlighter>
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
