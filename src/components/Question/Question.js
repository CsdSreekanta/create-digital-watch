import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h5>Question: How react works?</h5>
            <p>Answer: React basically maintain a tree for us. React stores Virtual DOM trees in the memory. By doing so react can apply updates to specific parts of the data tree, which is faster than re-rendering  the entirely of the DOM tree. Whenever  there's a change in data,  React JS will generate a new virtual DOM tree and compare it with the previous one to find  the quickest possible way to implement changes in the real DOM. Rendering the updates version takes less time and uses fewer resources.The practice greatly benefits large projects with intense user interaction.
</p>
<br></br>
<h5>Question: Difference between props and state</h5>
<h5>Answer:</h5>
<table>
 <thead>
 <tr>
    <th>Props</th>
    <th>State</th>
   
  </tr>
 </thead>
 <tbody>
 <tr>
    <td>The data is passed from one components to another.</td>
    <td>The data is passed within the components only.</td>
    
  </tr>
  <tr>
    <td>It is  immutable.</td>
    <td>It is mutable.</td>
    
  </tr>
  <tr>
    <td>Props are read only.</td>
    <td>State is both read and write.</td>
  </tr>
 </tbody>
</table>           
        </div>
    );
};

export default Question;