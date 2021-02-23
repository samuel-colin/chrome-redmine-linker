let button = document.getElementById('button');

button.onclick = function(element) {
  let id = document.getElementById('id').value;
  
  let action_url = 'https://redmine.senoe.com/redmine/issues/'+id;

  chrome.tabs.create({url: action_url});
};