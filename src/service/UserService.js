

function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
  console.log('user saved!!',user);
  
}

function loadUser(){
  let user = localStorage.getItem('user');
  return JSON.parse(user);
}

function addMove(move, user){
  user.moves.push(move);
  return user;
}

export default {
  saveUser,
  loadUser,
  addMove
  
}