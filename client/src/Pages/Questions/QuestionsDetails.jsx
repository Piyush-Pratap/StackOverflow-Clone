import React, {useState}from 'react'
import upvote from '../../assets/arrow-up.png'
import downvote from '../../assets/caret-down.png'
import moment from 'moment'
import { useParams , Link, useNavigate, useLocation } from 'react-router-dom'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import DisplayAnswers from './DisplayAnswers'
import { postAnswer, deleteQuestion , voteQuestion} from '../../actions/question'
import copy from 'copy-to-clipboard'


const QuestionsDetails = () => {

    const { id } = useParams()
    const questionList = useSelector(state => state.questionsReducer)
   // console.log(id)

    // var questionList = [{
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswer: 2,
    //     questionTitle: "What is a function?",
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
    //    _id: '2',
    //    upVotes: 3,
    //    downVotes: 2,
    //    noOfAnswer: 0,
    //    questionTitle: "What is a function?",
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
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswer: 0,
    //     questionTitle:"what is funstion?",
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
    //console.log(questionList)
    
    const [Answer, setAnswer] = useState(' ')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'


    const handlePostAns = (e, answerLength) =>{
        e.preventDefault()   
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before Submitting')
            }
            else{
                dispatch(postAnswer({ id, noOfAnswer: answerLength + 1, answerBody: Answer, userAnswerd: User.result.name, userId: User.result._id  }))
               
            }
        }
    }

    const handleShare = () =>{
         copy(url+location.pathname)
         alert('copied url:' +url+location.pathname)
    }

    const handleDelete = () =>{
        dispatch(deleteQuestion(id , Navigate))
    }

    const handleUpVote = () =>{
        dispatch(voteQuestion( id,'upVote', User.result._id))
    }

    const handleDownVote = () =>{
        dispatch(voteQuestion( id,'downVote', User.result._id))
    }

    return (
        <div className='question-details-page'>
            {
                questionList.data === null ?
                <h1>Loading...</h1> :
                <>
                    {
                        questionList.data.filter(question => question._id === id).map(question =>(
                            <div key={question._id}>
                              <section className='question-details-container'>
                                <h1>{question.questionTitle}</h1>
                                <div className='question-details-container-2'>
                                   <div className='question-votes'>
                                     <img src={upvote} alt='' width='18' className='votes-icon' onClick={handleUpVote}/>
                                     <p>{question.upVote.length - question.downVote.length}</p>
                                     <img src={downvote} alt='' width='18' className='votes-icon' onClick={handleDownVote}/>
                                   </div>
                                   <div style={{width: "100%"}}>
                                     <p className='question-body'>{question.questionBody}</p>
                                     <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag) => (
                                             <p key={tag}>{tag}</p>   
                                            ))
                                        }
                                     </div>
                                     <div className='question-actions-user'>
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }

                                        </div>
                                        <div>
                                            <p >asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/Users/${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                     </div>
                                   </div>
                                </div>
                              </section>
                              {
                                question.noOfAnswer !== 0 && (
                                   <section>
                                   
                                    <h3 style={{marginLeft: "20px"}}>{question.noOfAnswer} Answers</h3>
                                    <DisplayAnswers key={question._id} question ={question} handleShare={handleShare}/>
                                   </section>
                                ) 
                              }  
                              <section className='post-ans-container'>
                                 <h3 style={{marginLeft: "20px"}}>Your Answer</h3>
                                 <form onSubmit={ (e) => {handlePostAns(e, question.answer.length)}}>
                                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br/>
                                    <input type="Submit" className='post-ans-btn' value='Post your Answer'/>
                                 </form>
                                 <p style={{marginLeft: "20px"}}>Browse other question tagged 
                                     {
                                        question.questionTags.map((tag) => (
                                            <Link to='/tags' key={tag} className='ans-tags'>{tag}</Link>
                                        ))
                                     } or
                                     <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}> ask your own question</Link>
                                 </p>

                              </section>
                            </div>
                        ))
                    }
                </>
            }

        </div>
    )
}

export default QuestionsDetails