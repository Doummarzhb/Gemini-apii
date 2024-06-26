import React, { useState, useEffect } from 'react';
import styles from './SocialPage.module.css';
import Navbar from '../../components/Navbar';

function SocialPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      content: newPost,
      user: JSON.parse(localStorage.getItem('formData')).name
    };
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setNewPost('');
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className={styles.socialPageContainer}>
        <Navbar/>
      <h1>Community</h1>
      <form onSubmit={handlePostSubmit} className={styles.postForm}>
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Share your progress or updates..."
          required
        />
        <button type="submit" className='class'>Post</button>
      </form>
      <div className={styles.postsContainer}>
        {posts.map(post => (
          <div key={post.id} className={styles.post}>
            <p><strong>{post.user}</strong></p>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)} className={styles.deleteButton}>Delete</button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialPage;
