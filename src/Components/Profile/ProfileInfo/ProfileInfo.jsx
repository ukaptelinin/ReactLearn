import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
          <div>
              <img src = 'http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg'></img>
         </div>
         <div className={s.descriptionBlock}>
            Ava + description
         </div>
       </div>
    );
  }


export default ProfileInfo;

