import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
            <img src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg"></img>
              {props.message}
              <div>
                 <span>Like</span> {props.likesCounts}
              </div>
            </div>
          
    );
}

export default Post;