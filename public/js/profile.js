const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('project-name').value.trim();
  //const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.getElementById('project-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },

    });

    console.log(response);

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  console.log('clickity clack dont talk back');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, { //this needs to be updated in All
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');//this needs to be updated
    }
  }
};

document
  .getElementById('button-create')//this needs to be updated in both places
  .addEventListener('click', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
