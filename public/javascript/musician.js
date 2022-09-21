async function addMusician(event) {
    event.preventDefault();
  
    const img = document.querySelector('user');
    const username = document.querySelector('profil-image');
    const bio = document.querySelector('bio_intro');
  
    const response = await fetch(`/api/users/musicians`, {
      method: 'GET',
      body: JSON.stringify({
        title: title,
        content_txt: content_txt,
        attached_file: attach,
        type: document.querySelector('#type')
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/classroom');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  