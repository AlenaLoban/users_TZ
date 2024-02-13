import { IUser, registUsers } from "./users";
type IPropsForCheck = {
  email: string;
  password: string;
};

const saveToken = (data: IUser | IPropsForCheck) => {
  localStorage.setItem("token", btoa(`${data.email}:${data.password}`));
};

export const createRegUser = (data: Omit<IUser, "conf_password">) => {
  if (registUsers.length > 0) {
    if (registUsers.find((user) => user.email !== data.email)) {
      registUsers.push(data);
      saveToken(data);
      alert("вы успешно были зарегестрированы");
      return true;
    }
    alert("такой email уже существует.Форма не отправлена");
  } else {
    registUsers.push(data);
    saveToken(data);
    alert("вы успешно были зарегестрированы");
    return true;
  }
};

export const checkUser = (data: IPropsForCheck) => {
  const findUser = registUsers.find((user) => user.email === data.email);

  if (!findUser) {
    return false;
  }
  saveToken(data);
  return findUser?.email === data.email && findUser?.password === data.password;
};
