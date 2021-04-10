const newCommentHandler = async (event) => {
    event.preventDefault();

    const user_name = document.getElementById('').value.trim || "I'm a Ghost";
    const comment = document.getElementById('').value.trim();
    const post_id = document.getElementById('').value.trim();

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

document.getElementById('').addEventListener('submit', newCommentHandler);