import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'


const HomeMainbar = () =>{

    const location = useLocation()
    const user = 123;
    const  navigate = useNavigate()

    const questionList = useSelector(state => state.questionsReducer)
    //console.log(questionList)
     
    // var questionList = [{
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswer: 2,
    //     questionTitle: "What is a function",
    //     questionBody: "It meant to be",
    //     questionTags:["Java", "node js","react js","mongodb"],
    //     userPosted:"mano",
    //     askedOn:"Jan 1",
    //     answer : [{
    //         answerBody: "Answer",
    //         userAnswered : "pratap",
    //         answeredOn: "jan 2",
    //         userId: 2
    //     }]

    
    // }, {
    //    _id: 2,
    //    upVotes: 3,
    //    downVotes: 2,
    //    noOfAnswer: 0,
    //    questionTitle: "What is a function",
    //    questionBody: "It meant to be",
    //    questionTags: ["JavaScript", "R", "python","react js"],
    //    userPosted: "mano",
    //    askedOn: "jan 1",
    //    answer : [{
    //     answerBody: "Answer",
    //     userAnswered : "pratap",
    //     answeredOn: "jan 2",
    //     userId: 2
    // }]
    
    // },{
    //     _id: 3,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswer: 0,
    //     questionTitle:"what is funstion",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript","R","python","express js"],
    //     userPosted:"mano",
    //     askedOn:"jan 1",
    //     answer : [{
    //         answerBody: "Answer",
    //         userAnswered : "pratap",
    //         answeredOn: "jan 2",
    //         userId: 2
    //     }]
    // }]
    

    const checkAuth = () =>{
        if(user===null){
            alert("login or sign up to ask question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')
        }
    }

    
    return(
        <div className='main-bar'>
            <div className='main-bar-header'>
              {
                location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
               }
                  <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{questionList.data.length} questions</p>
                        <QuestionList questionList={questionList.data}/>
                    </>

                }
            </div>
        </div>
    )
}

export default HomeMainbar