import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React, { useState ,useEffect} from "react";
import {AiFillDelete} from "react-icons/ai";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


function Post() {
  
  const username = JSON.parse( localStorage.getItem("User"));
  const [file, setFile] = useState([]);
 
 
  //   localStorage.setItem("cart", JSON.stringify(file));
  
  
  //  var file2 =  JSON.parse(localStorage.getItem("cart"));
  
 
  console.log('img',file)
  function post(e) {
    setFile([...file, e.target.files[0]]);
  }
  // const handleDelete = (index) => {
  //   setFile(file.filter((v, i) => i !== index));
  // }
  function deleteItem(number) {
    const delete1 = file.filter((hi, index) => {
      return number !== index;
    });
    setFile(delete1);
  }

  
  return (
  
    
   
    <div>
    

   
      <label className="m-3 text-success font-weight-bold" ><b>Add Post</b></label>
      <input className="btn btn-success" type="file" name='testImage' onInput={post} id='input_post'/>
      {file.map((item, i) => {
        return (
          <div className="post" key={i} id="img">
            <div className="post__header">
              <div className="post__headerAuthor">
                <Avatar style={{ marginRight: "10px" }}>
                 
                </Avatar>{" "}
               {username.name}
             
              </div>
             <MoreHorizIcon/>
            </div>
            <div className="post__image">
              <img src={URL.createObjectURL(file[i])} alt="Post" />
            </div>
            <div className="post__footer">
              <div className="post__footerIcons">
                <div className="post__iconsMain">
                  <FavoriteBorderIcon className="postIcon" sx={{ fontSize: "40px" }} />
                  <ChatBubbleOutlineIcon className="postIcon" sx={{ fontSize: "40px" }} />
                  <TelegramIcon className="postIcon" sx={{ fontSize: "40px" }} />
                </div>
                <div className="post__iconSave">
                {/* <button className='btn btn-danger rounded-pill' onClick={() => { deleteItem(i) }}>Delete</button> */}
                  <BookmarkBorderIcon className="postIcon" sx={{ fontSize: "40px" }} />
                </div>
              </div>
              Liked by  people.
            </div>
            <button className='btn btn-danger rounded-pill' onClick={() => { deleteItem(i) }}> <AiFillDelete/></button>

          </div>
        )
      })}
    </div>
  );
}

export default Post;
