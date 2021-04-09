const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById('project-name').value.trim();
  //const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.getElementById('project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, { //this needs to be updated in All
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');//this needs to be updated
    }
  }
};

document
  .querySelector('#button-create')//this needs to be updated in both places
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')//this needs to be updated in both places
  .addEventListener('click', delButtonHandler);
