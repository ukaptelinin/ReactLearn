  import {profileReduser} from './profile-reducer';
  import {dialogsReduser} from './dialogs-reducer';
  import {sidebarReduser} from './sidebar-reducer';
   
  
  let store = {
    _state: { 
        profilePage: {
        posts: [
            {id: 1,message: 'Hi, how are you?',likesCounts: 12},
            {id: 2,message: 'It,s my first post!',likesCounts: 8},
            {id: 3,message: 'It,s my 2-d post!',likesCounts: 2},
            {id: 4,message: 'It,s my 3-d post!',likesCounts: 78},
           ],
        newPostText: 'Homiak'   
          
    },
    dialogsPage: {
        dialogs: [
            {id: 1,name: 'Dimych'},
            {id: 2,name: 'Andrey'},
            {id: 3,name: 'Sveta'},
            {id: 4,name: 'Sasha'},
            {id: 5,name: 'Victor'},
            {id: 6,name: 'Valera'}
           ],
        messages: [
            {id: 1,message: 'Привет медвед!'},
            {id: 2,message: 'Хай пипл!'},
            {id: 3,message: 'Hallow,world!'},
            {id: 4,message: 'Hallow,world!'},
            {id: 5,message: 'Hallow,world!'},
            {id: 6,message: 'Hallow,world!'}
           ],
           newMessageBody: ""
                 },
            sidebar: {}          
            },

            _callSubscriber() {
                console.log('Changed');
             },

            getState() {
              return this._state;
            },

         subscribe(observer) {
            this._callSubscriber = observer;
          },

         dispatch(action)  {
            this._state.profilePage = profileReduser(this._state.profilePage,action);
            this._state.dialogsPage = dialogsReduser(this._state.dialogsPage,action);
            this._state.sidebar = sidebarReduser(this._state.sidebar,action);
            this._callSubscriber(this._state);
}
}


       

export default store;

window.store = store;