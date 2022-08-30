const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "dog@ya.ru",
  id: "1",
  about: "My story about my hobbies",
  avatar: "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
};

const users = {
  0: { name: "Владислава", lastname: "Анютина", id:4 },
  1: { name: "Юлия", lastname: "Петрова", id:12 },
  2: { name: "Петр", lastname: "Яблочков", id:11 },
  3: { name: "Константин", lastname: "Лесков", id:2 },
  4: { name: "Ипатий", lastname: "Тетерин", id:5 },
};


export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
    return user;
}
export function getUsers() {
    return users;
}