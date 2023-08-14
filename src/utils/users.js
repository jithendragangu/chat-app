const users = [];

//addUser, removeUser,getUser,getUserInRoom

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //validate the  data
  if (!username || !room) {
    return { error: 'Username and room are required' };
  }

  //check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //validate username
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }

  //store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  //find the index stop there but if we use the filter method it executes till to the end
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser({ id: 369, username: '  Jithendra', room: '  aswaraopalem' });
// addUser({ id: 3, username: '  sunny', room: '  aswaraopalem' });
// addUser({ id: 6, username: '  jithu', room: '  avanigadda' });
// addUser({ id: 9, username: '  panduu', room: '  avanigadda' });

// console.log(users);

// const getUserDetail = getUser(369);

// console.log(getUserDetail);
// // console.log(users);

// const roomUsers = getUsersInRoom('aswaraopalem');
// console.log(roomUsers);

// const removedUser = removeUser(369);

// console.log(removedUser);
// console.log(users);
