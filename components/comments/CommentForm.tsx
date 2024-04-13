import React, { useState } from 'react';
// Import CommentAPI here if needed

const CommentForm = ({ postId }) => {
  const [author, setAuthor] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [submitStatus, setSubmitStatus] = useState(false)
  const [alertColor, setAlertColor] = useState('');
  const [responseMessage, setResponseMessage] = useState('')

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleEmailChange = (e) => {
    setAuthorEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setContent(e.target.value.replace(/\n/g, "\\n"));
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    console.log("Form submitted"); // Check if form submission is triggered
    setSubmitStatus(true);
    setResponseMessage('Komentar anda telah terkirim')
    setAlertColor('bg-yellow-500')

    // Construct the comment data
    let commentData = {
      postId: postId,
      author: event.target.author.value,
      authorEmail: event.target.authorEmail.value,
      content: event.target.content.value,
    };

    try {
      // Send the comment data to the backend (e.g., WordPress)
      const response = await fetch('/api/comment', {
        method: 'POST',
    
        body: JSON.stringify(commentData),
      });

      const result = await response.json();
      setResponseMessage(result.message);


      if (response.ok) {
        console.log('Comment submitted successfully!');
        // Clear form fields after successful submission
        setAuthor('');
        setAuthorEmail('');
        setContent('');
        setAlertColor('bg-green-500');
      } else {
        console.error('Failed to submit comment:', response.statusText);
        // Handle error (e.g., display error message to user)
        setAlertColor('bg-red-500');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      // Handle error (e.g., display error message to user)
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
    {
      submitStatus && 
      <div className={`${alertColor} py-2 px-4 mt-4 text-slate-100`}>
     {responseMessage}
     </div>
    }
      <div className="mx-auto p-10 mb-10 gap-x-6 gap-y-8 max-w-sm mx-auto">
        <h1 className='font-bold mb-0 text-center sm:text-xl'>Comment</h1>
        <div className="sm:col-span-4">
          <label htmlFor="author" className="mt-5 block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input
              type="text"
              name="author"
              id="author"
              autoComplete="given-name"
              value={author}
              onChange={handleAuthorChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="authorEmail" className="mt-5 block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input
              id="authorEmail"
              name="authorEmail"
              type="email"
              autoComplete="email"
              value={authorEmail}
              onChange={handleEmailChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
              />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="content" className="mt-5 block text-sm font-medium leading-6 text-gray-900">Comment</label>
          <div className="mt-2">
            <textarea
              id="content"
              name="content"
              rows={3}
              value={content}
              onChange={handleCommentChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
              defaultValue={''}
              />
          </div>
        </div>

        <input type='hidden' name="postId" id="postId" value={postId}/>

        <button type="submit" className='mt-5 rounded-0 bg-orange px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Submit</button>
      </div>
    </form>
    </>
  );
};

export default CommentForm;
