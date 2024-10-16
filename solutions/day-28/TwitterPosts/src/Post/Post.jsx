/* eslint-disable react/prop-types */
import "./Post.css";
import {  } from "react";
import {
    EditIcon,
    DelIcon,
    AccPfpIcon,
    CommentIcon,
    HeartIcon,
    RetweetIcon
} from "../SVGIcon.jsx";

export default function Post({ id, postInfo, startEditing, del }) {
    return (
        <>
            <div className="user-info">
                <AccPfpIcon />
                <p className="name-and-tag">
                    <span className="name">{postInfo.user.name}</span>
                    {postInfo.user.tag}
                </p>
            </div>
            <p className="post-text">{postInfo.text}</p>
            <div className="edit-del-btns">
                <button className="btn edit-btn" onClick={startEditing(id)}>
                    <EditIcon />
                </button>
                <button className="btn del-btn" onClick={del(id)}>
                    <DelIcon />
                </button>
            </div>
            <div className="social-btns">
                <button className="btn com-btn">
                    <CommentIcon />
                </button>
                <button className="btn fav-btn">
                    <HeartIcon />
                </button>
                <button className="btn rt-btn">
                    <RetweetIcon />
                </button>
            </div>
            <p className="date">
                <span className="date-center">{postInfo.date}</span>
            </p>
        </>
    )
}
