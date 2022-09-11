async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
//console.log(JSON.stringify(response));
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//this code runs at load/reload
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
comment_body.value = "";

function edit(id){
  let myEditButton = document.querySelector("#btnEdit_" + id);
  let myCommentTextArea = document.querySelector("#comment_text_area_"+id);

  if(myEditButton.innerHTML === "EDIT"){
    document.querySelector("#comment_text_div_"+id).style.display = "none";
    myCommentTextArea.style.display = "block";
    myEditButton.innerHTML = "SAVE";
  }else{
      //SAVE THE CHANGES
    fetch(`/api/comment/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        comment_text: document.querySelector("#comment_text_area_"+id).value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    });
  }
}