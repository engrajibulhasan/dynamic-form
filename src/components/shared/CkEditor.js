import BlockEditor from "@ckeditor/ckeditor5-build-balloon-block";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const CkEditor = ({ setFormName }) => {
  return (
    <div>
      <CKEditor
        editor={BlockEditor}
        // data="<p>Hello from CKEditor 5!</p>"
        data={`<h2>Add Title</h2>`}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFormName(data);
          console.log("changing", { event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

const DummyContent = () => {
  return (
    <p>
      The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit
      amet, consectetur adipiscing elit consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.We only use ingredients.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
      eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Assortment of fresh baked fruit breads and muffins
      5.50 Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
      Vanilla flavored batter with malted flour 7.50 Scrambled eggs, roasted red
      pepper and garlic, with green onions 7.50 With syrup, butter and lots of
      berries 8.50 We offer full-service catering for any event, large or small.
      We understand your needs and we will cater the food to satisfy the
      biggerst criteria of them all, both look and taste. Do not hesitate to
      contact us. Catering Service, 42nd Living St, 43043 New York, NY You can
      also contact us by phone 00553123-2323 or email catering@catering.com, or
      you can send us a message here:
    </p>
  );
};

export default CkEditor;
