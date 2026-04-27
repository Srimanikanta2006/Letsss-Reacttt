// USE this complete file code as a snippet, whenever ur working with Authentication in appwrite.

import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client(); //we can declare endpoint and project id, but its just waste of resources (optimized way of writing better code) as we are using it in every function, so we can declare it in constructor and use it in every function.
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        //call another function.
        return this.login({ email, password });
      } else {
        return userAccount;
      }
      //   Id is compulsory first, as its mentioned in the documentation, we can use unique id generator of appwrite to generate unique id for every user.
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({ email, password });
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error ", error);
    }
    return null;
    // if there is an error, we are returning null, so that we can handle it in the frontend and show the user that they are not logged in.
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
