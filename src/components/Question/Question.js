import React from 'react';

const Question = () => {
    return (
        <div>
            <h5>Question: How react work?</h5>
            <p>Answer: React basically maintain a tree for us. React stores Virtual DOM trees in the memory. By doing so react can apply updates to specific parts of the data tree, which is faster than re-rendering  the entirely of the DOM tree. Whenever  there's a change in data,  React JS will generate a new virtual DOM tree and compare it with the previous one to find  the quickest possible way to implement changes in the real DOM. Rendering the updates version takes less time and uses fewer resources.The practice greatly benefits large projects with intense user interaction.
</p>
            
        </div>
    );
};

export default Question;