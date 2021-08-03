import {authAxios} from '_utils';

export default class AuthService {
  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static async register(user: any) {
    const body = {...user};

    const response = await authAxios.post('/new-user/', body);

    return response.data;
  }

  static async signinWithEmailAndPassword(email: string, password: string) {
    const body = {
      email,
      password,
    };

    const response = await authAxios.post('/login/', body);

    return response.data;
  }
}
