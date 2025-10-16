export {randomColor,randomPassword};
const randomColor = function () {
  let color = "#";
  const chars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++)
    color += chars[Math.floor(Math.random() * chars.length)];
  return color;
};

const randomPassword = function (len = 10) {
  let password = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
  for (let i = 0; i < Number(len); i++)
    password += chars[Math.floor(Math.random() * chars.length)];
  return password;
};