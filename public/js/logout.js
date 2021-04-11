const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const resetTimer = () => {
  let time = 0;
  clearTimeout(time);
  time = setTimeout(logout, 30000)
};

const idleTime = () => {
  console.log('called idle time');

  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  logout;

};

window.onload = () => {
  idleTime();
};


document.querySelector('#logout').addEventListener('click', logout);
