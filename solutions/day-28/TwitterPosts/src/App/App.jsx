import { useState } from 'react'
import './App.css'
import NewPostSection from '../NewPostSection/NewPostSection';
import { TextareaEdit } from '../Textarea/Textarea.jsx';
import Post from '../Post/Post';
import { initData } from '../initData.js';

export default function App() {
  const [textarea, setTextarea] = useState('');
  /*
    Because a new post can't be written whilst editing another post, the 'textarea' state
    can be used for both.
  */
  const [posts, setPosts] = useState(initData);
  const [editing, setEditing] = useState({
    editor: false,
    id: ''
  });
  /*
    When editing a post, the 'editing' state has an 'editor' property set to true, and an id
    set to the current post being edited. When the edit is finished (i.e. committed or
    cancelled), the 'editor' property is set back to false, and the 'id' is cleared.
  */
  
  const oneDigit = (num) => {
    return num < 10 ? `0${num}` : num
  }
  
  const timeAndDate = () => {
    const date = new Date();

    const DMY = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const time = `${oneDigit(date.getHours())}:${oneDigit(date.getMinutes())}`;

    return `${DMY} ${time}`
  }

  const handleChange = (e) => {
    setTextarea(e.target.value);
  }

  const handleSubmit = (e, isEdit = false, postId = null) => {
    e.preventDefault();
    if (textarea === '') {
      alert('You must enter a message to post!');
      return
    }

    isEdit ?
      commitEdit(postId, textarea) :
      setPosts([
        ...posts,
        {
          id: `post${posts.length + 1}`,
          user: {
            name: 'Anonymous',
            tag: '@unknown_user',
          },
          date: timeAndDate(),
          text: textarea
        }
      ]);
    
    /*
      The 'isEdit' parameter determines whether the form submission is for a new tweet or to
      edit a tweet. If there is an edit, the edit is committed with the current post id and
      the textarea value. Otherwise, the new post is added to the end of the 'posts' list.
    */

    setTextarea('');
  };


  const startEditing = (id) => {
    setEditing({
      ...editing,
      editor: !editing.editor,
      id: id
    });
  }

  const cancelEdit = () => {
    setEditing({
      ...editing,
      editor: !editing.editor,
      id: ''
    });
    setTextarea('');
    // Resets 'editing'.
  }

  const commitEdit = (id, newText) => {
    const currPostIndex = posts.findIndex((post) => post.id === id);

    const updatedPost = Object.assign({}, posts[currPostIndex]);
    updatedPost.text = newText;
    // Update the post text (hence "commit").

    const newPosts = [
      ...posts.slice(0, currPostIndex),
      updatedPost,
      ...posts.slice(currPostIndex + 1)
    ];
    setPosts(newPosts);
    // Inserts the updated post copy back into the 'posts' list at the original index.

    setEditing({
      ...editing,
      editor: !editing.editor,
      id: ''
    });
  };

  const delPost = (id) => {
    const currPostIndex = posts.findIndex((post) => post.id === id);

    const newPosts = [
      ...posts.slice(0, currPostIndex),
      ...posts.slice(currPostIndex + 1)
    ];
    setPosts(newPosts);
    //! Cannot update a component (`App`) while rendering a different component (`Post`).
    //? Might be able to cleanup with 'useEffect', by cleaning up the old 'posts' value.

    // Sets the 'posts' list to a copy of 'post', minus the post to be deleted.
  };

  return (
    <div className='app'>
      <NewPostSection
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        textarea={textarea} />
      <div className='posts-list'>
        {posts.map((post, i) => {
          const key = `tweet${i + 1}`;
          const id = `post${i + 1}`;
          return (
            <div className='post-grid' key={key}>
              {
                /* Render the editor in place of the selected post when editing. */
                editing.editor && editing.id === id ? <TextareaEdit
                  id={id}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  state={textarea}
                  cancelEdit={cancelEdit}
                /> : <Post
                  key={key}
                  id={id}
                  postInfo={post}
                  startEditing={startEditing}
                  del={delPost}
                />
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
