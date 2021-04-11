const newCommentHandler = async (event) => {
    event.preventDefault();

    const user_name = document.querySelector('#comment-user-name').value.trim() || "I'm a Ghost";
    const comment = document.getElementById('comment-desc').value.trim();
    const post_id = document.getElementById('post-id').value.trim();

    console.log('getting here', user_name, comment, post_id);


    if (user_name && comment && post_id) {
        const response = await fetch(`/api/comment`, { //need to build out
            method: 'POST',
            body: JSON.stringify({ user_name, comment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to comment');
        }
    }
};

//consider buildling out hidden forms

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);