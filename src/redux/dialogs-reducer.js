const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReduser = (state,action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
                  state.newMessageBody = action.body;
                  return state;
        case SEND_MESSAGE:
                  let body = state.newMessageBody;
                  state.newMessageBody = '';
                  state.messages.push( {id: 7,message: body});
                  return state;
        default:
                  return state;        
    }
}

export const sendMessageActionCreator = () =>{
    return {     
     type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (body) =>{
        
        return {
         type: UPDATE_NEW_MESSAGE_BODY,
         body: body
        } 
}
