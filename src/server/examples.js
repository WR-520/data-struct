/******        examples  ******/
/* ====================================================*/
import Request from '../utils/request'
// index
export const getArticles = params => {
    return Request.get('/api/articles', params)
}
// search
export const getQuestions = params => {
    return Request.get('/api/questionData', params)
}

//choice-question
export const getChoiceQuestionLists = params => {
    return Request.get('/api/choiceQuestionLists', params)
}
export const delChoiceQuestion = params => {
    return Request.post('/api/delChoiceQuestion', params)
}
export const editChoices = params => {
    return Request.post('/api/editChoices', params)
}
