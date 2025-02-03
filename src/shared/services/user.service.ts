import { API_LINKS } from "../keys";
import { User } from "../../types/user.type";
import { HttpService } from "./http.service";

class UserService extends HttpService {
  constructor(apiUrl:string) {
    super(apiUrl); 
  }

  async getRandomUser(): Promise<User> {
    const response = await this.get<{ results: User[] }>("/");
    return response.results[0];
  }
}

const userService = new UserService(API_LINKS.USER_API)

export default userService;