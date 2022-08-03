import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'


const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question."
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "C#",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programmming language developed by Microsoft" 
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high level object oriented programming language. Use this tag When you're having problems using or understanding the language itself"
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open-source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development."
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (Hyper Text Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. "
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is a Google's Mobile operating system. used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TV, Wear, Glass, IoT)."
    },{
        id: 8,
        tagName: "CSS",
        tagDesc: "CSS is a represtation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations "
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a javascript library for building user interfaces. it uses a declerative, component-based paradigm and aims to be  both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based , non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and library."
    }]
    return  (
        <div className='home-container-1'>
          <LeftSidebar/>
          <div className='home-conatiner-2'>
              <h1 className='tags-h1'>Tags</h1>
              <p className='tags-p'>A tag is a keyword or a label that categorizes your question with other, similar questions.</p>
              <p className='tags-p'>Using the right tags makes it easier for others to find and answer your questions.</p>
              <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
              </div>
          </div>

        </div>
    )
}

export default Tags