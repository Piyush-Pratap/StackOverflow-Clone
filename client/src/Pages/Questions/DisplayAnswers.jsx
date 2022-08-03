import React from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer} from '../../actions/question'


const DisplayAnswers = ({question,handleShare }) =>{
    const { id } = useParams()
    const User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch()
    const handleDelete = (answerId, noOfAnswer) => {
        dispatch(deleteAnswer( id, answerId, noOfAnswer-1))
    }

    return(
        <div>
           {
             question.answer.map((ans) => (
                <div className='display-ans' key={ans._id} style={{paddingBottom: "20px", borderBottom: "solid 1px rgba(0, 0, 0, 0.112)", marginLeft: "20px"}}>
                   <p style={{fontSize: "14px", lineHeight: "18px", whiteSpace: "pre-line"}}>{ans.answerBody}</p>
                   <div className='question-actions-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                 User?.result?._id === ans?.userId && (
                                    <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswer)}>Delete</button>
                                 )
                            }
                        </div>
                   </div>
                   <p>answered {moment(ans.answeredOn).fromNow()}</p>
                   <Link to={`/Users/${ans.userId}`} className='user-link' style={{color: '#0086d8'}}>
                        <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered?.charAt(0).toUpperCase()}</Avatar>
                            <div>
                                {ans.userAnswered}
                            </div>
                    </Link>
                </div>
             ))
           }
        </div>
    )
}

export default DisplayAnswers