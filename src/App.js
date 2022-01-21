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

// Select 
import Select from 'react-select';

// Opções select
const options = [
  { value: 'Paragraph', label: 'Paragraph' },
  { value: 'Heading3', label: 'Heading 3' },
  { value: 'Heading2', label: 'Heading 2' },
  { value: 'Heading1', label: 'Heading 1' }
]

function App() {
 function onSelectChange({ value }) {
    console.log(value)

    switch (value) {
      case 'Paragraph':
        document.execCommand('formatBlock', false, 'p'); 
          break;
      case 'Heading3':
        document.execCommand('formatBlock', false, '<h3>'); 
          break;
      case 'Heading2':
          document.execCommand('formatBlock', false, '<h2>'); 
        break;
      case 'Heading1':
          document.execCommand('formatBlock', false, '<h1>'); 
        break;
      default:
          document.execCommand('formatBlock', false, 'p'); 
        break;
    }
  };

  return (
    <div className='container'>
        <Button />
        <div className="content">
          {/* Toolbar */}
          <section className='toolbar'>
            <Select  
              onChange={onSelectChange}
              defaultValue={options[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={true}
              name="Heading"
              options={options} 
            />

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
          </section>

          {/* Title */}
          <section id='content' className='textContainer' contentEditable='true'>

          </section>
        </div>
    </div>
  );
}

export default App;
