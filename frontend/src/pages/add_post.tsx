import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import CommonAlertLoader from "../components/common/CommonAlertLoader";
import { createBlogPost } from "../apis/blog_apis";
import { createBlogResponseInterface } from "../utils/interfaces/blogs/blog_interface";
import { appConstants } from "../utils/app_constants/app_string_constants";
import { useNavigate } from "react-router-dom";
import { routerConstants } from "../utils/app_constants/router_constants";

const AddPostPage = () => {

    const modules = {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
      };

      const formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
      ];

      const [contentValue,changeValue] = useState('');

      const [isLoader,setLoader] = useState(false);
      const title = useRef<HTMLInputElement>(null);
      const navigate = useNavigate();

  return (
    <div className="addPostParent">
            <div className="addPostTitle">
                    <input placeholder="Enter Title Here" ref={title}>

                    </input>
            </div>
            <div className="addPostContent">
                    <ReactQuill 
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    placeholder="Write Something here"
                    value={contentValue}
                    onChange={(value)=>{
                        changeValue(value)
                    }}
                    style={{height:"50vh"}}
                    />
            </div>
            <div className="addPostButtonCover">
            <button className="btnPrimary addPostButton" onClick={async()=>{
                setLoader(true);

              const res:createBlogResponseInterface = await  createBlogPost({title:title?.current?.value??'',content:contentValue});

              if(res.response==appConstants.success){
                setLoader(false);
                navigate(routerConstants.homePage);
              }
              else{
                console.log("got error in this")
                console.log(res.error);
                setLoader(false);
              }
                

            }}>Post</button>
            </div>
            {isLoader?<CommonAlertLoader/>:<></>}
    </div>)
    
}

export default AddPostPage;
