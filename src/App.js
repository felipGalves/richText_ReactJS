import React, { useState } from 'react'
import './App.css';
import { 
  faBold,
  faItalic,
  faUnderline,
  faListUl,
  faListOl,
  faLink,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faImage,
  faHeading
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className='container'>
        <div className="content">
          {/* Toolbar */}
          <section className='toolbar'>
          <button 
              onClick={e => document.execCommand('formatBlock', false, '<h1>')}
            >
              <FontAwesomeIcon icon={faHeading} />
            </button>

            <button 
              onClick={e => document.execCommand("bold", false, null)}
            >
              <FontAwesomeIcon icon={faBold} />
            </button>

            <button 
              onClick={e => document.execCommand("italic", false, null)}
            >
              <FontAwesomeIcon icon={faItalic} />
            </button>

            <button 
              onClick={e => document.execCommand("underline", false, null)}
            >
              <FontAwesomeIcon icon={faUnderline} />
            </button>

            <button 
              onClick={e => document.execCommand("insertUnorderedList", false, null)}
            >
              <FontAwesomeIcon icon={faListUl} />
            </button>

            <button 
              onClick={e => document.execCommand("insertOrderedList", false, null)}
            >
              <FontAwesomeIcon icon={faListOl} />
            </button>

            <button 
              onClick={e => document.execCommand("createLink", false, null)}
            >
              <FontAwesomeIcon icon={faLink} />
            </button>

            <button 
              onClick={e => document.execCommand("justifyLeft", false, null)}
            >
              <FontAwesomeIcon icon={faAlignLeft} />
            </button>

            <button 
              onClick={e => document.execCommand("justifyCenter", false, null)}
            >
              <FontAwesomeIcon icon={faAlignCenter} />
            </button>

            <button 
              onClick={e => document.execCommand("justifyRight", false, null)}
            >
              <FontAwesomeIcon icon={faAlignRight} />
            </button>

            <button 
              onClick={e => document.execCommand("justifyFull", false, null)}
            >
              <FontAwesomeIcon icon={faAlignJustify} />
            </button>

            <button 
              onClick={e => document.execCommand("insertImage", false, null)}
            >
              <FontAwesomeIcon icon={faImage} />
            </button>
          </section>

          {/* Title */}
          <section className='textContainer' contentEditable='true'>

          </section>
        </div>
    </div>
  );
}

export default App;
