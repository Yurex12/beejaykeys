import React from "react";
// import GitHubCorner from './GithubCorner';
import type { Tag } from "react-tag-input";
import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

export interface TagInputComponentProps {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
}

export default function ReactTag({ tags, onChange }: TagInputComponentProps) {
  // const [tags, setTags] = React.useState<Array<Tag>>([
  //   { id: "Thailand", name: "Thailand", className: "" },
  //   { id: "India", name: "India", className: "" },
  //   { id: "Vietnam", name: "Vietnam", className: "" },
  //   { id: "Turkey", name: "Turkey", className: "" },
  // ]);

  const handleDelete = (i: number) => {
    const newTags = tags.filter((_, index) => index !== i);
    onChange(newTags);
  };

  const onTagUpdate = (index: number, newTag: Tag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    onChange(updatedTags);
  };

  const handleAddition = (tag: Tag) => {
    onChange([...tags, tag]);
  };

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = [...tags];
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    onChange(newTags);
  };

  const onClearAll = () => {
    onChange([]);
  };

  return (
    <ReactTags
      tags={tags}
      labelField="name"
      classNames={{
        tags: "flex flex-wrap gap-3 p-2 border border-gray-200  rounded-lg bg-white shadow-sm",
        tagInput: "w-full ",
        tagInputField:
          "outline-none rounded-lg p-2 border border-gray-200  text-sm text-gray-500 w-full focus:border-green-500",
        selected: "flex flex-wrap gap-2",
        tag: "text-white bg-green-500 px-3 py-1 rounded-md flex items-center gap-4",
        remove: "cursor-pointer",
        editTagInput: "flex items-center",
        editTagInputField:
          "border border-green-500 rounded-full px-2 py-1 text-sm text-green-700 focus:outline-none focus:ring-2 focus:ring-green-300",
        clearAll: "text-red-500 text-sm cursor-pointer mt-4",
      }}
      separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      onTagUpdate={onTagUpdate}
      inputFieldPosition="bottom"
      autoFocus={false}
      editable
      clearAll
      onClearAll={onClearAll}
      maxTags={7}
    />
  );
}
