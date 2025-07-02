import React, { useRef } from "react";

const RichTextEditor = ({ content, setContent }) => {
  const editorRef = useRef(null);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    setContent(editorRef.current.innerHTML);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Story Content
      </label>

      {/* Formatting Buttons */}
      <div className="flex flex-wrap gap-2 mb-2">
        <button type="button" onClick={() => execCommand("bold")} className="px-2 py-1 border rounded hover:bg-gray-100 font-bold">B</button>
        <button  type="button"  onClick={() => execCommand("italic")} className="px-2 py-1 border rounded hover:bg-gray-100 italic">I</button>
        <button  type="button"  onClick={() => execCommand("underline")} className="px-2 py-1 border rounded hover:bg-gray-100 underline">U</button>
        <button type="button"  onClick={() => execCommand("strikeThrough")} className="px-2 py-1 border rounded hover:bg-gray-100 line-through">S</button>
        <button type="button"  onClick={() => execCommand("justifyLeft")} className="px-2 py-1 border rounded hover:bg-gray-100">Left</button>
        <button type="button"  onClick={() => execCommand("justifyCenter")} className="px-2 py-1 border rounded hover:bg-gray-100">Center</button>
        <button  type="button"  onClick={() => execCommand("justifyRight")} className="px-2 py-1 border rounded hover:bg-gray-100">Right</button>
        <button type="button"  onClick={() => execCommand("insertUnorderedList")} className="px-2 py-1 border rounded hover:bg-gray-100">• List</button>
      </div>

      {/* Editable Content */}
      <div
        ref={editorRef}
        contentEditable
        onInput={() => setContent(editorRef.current.innerHTML)}
        className="w-full min-h-[200px] border rounded-md px-4 py-2 text-sm bg-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <p className="text-xs text-gray-400 mt-2">
        {content.replace(/<[^>]*>/g, "").trim().split(/\s+/).length} words
      </p>
    </div>
  );
};

export default RichTextEditor;
