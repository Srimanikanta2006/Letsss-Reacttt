import conf from "../conf/conf.js";
import authService from "./auth.js";
import {
  Client,
  Account,
  ID,
  Databases,
  Storage,
  Query,
  TablesDB,
} from "appwrite";

export class Service {
  client = new Client();
  tablesDB;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.tablesDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const user = await authService.getCurrentUser();

      if (!user) throw new Error("User not logged in");

      return await this.tablesDB.createRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId: user.$id, // ✅ correct
        },
      });
      return result;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error ", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const result = await this.tablesDB.updateRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
        data: {
          title: title,
          content: content,
          featuredImage: featuredImage,
          status: status,
        },
      });
      return result;
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error ", error);
    }
  }
  async deletePost(slug) {
    try {
      const result = await this.tablesDB.deleteRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
      return true;
    } catch (e) {
      console.log(`Error in database methods ${e}`);
      return false;
    }
  }
  async getPost(slug) {
    try {
      const result = await this.tablesDB.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        rowId: slug,
      });
      return result;
    } catch (e) {
      console.log(`Error in database methods ${e}`);
    }
  }

  async getPosts() {
    try {
      const result = await this.tablesDB.listRows({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteCollectionId,
        queries: [Query.equal("status", "active")],
        // queries: [],
      });
      return result.rows;
    } catch (e) {
      console.log(`Error occured in database methods ${e}`);
    }
  }

  //file upload service.
  async uploadFile(file) {
    try {
      const result = await this.bucket.createFile({
        bucketId: conf.appwriteBucketId,
        fileId: ID.unique(),
        file: file,
      });
      return result;
    } catch (error) {
      console.log("Appwrite service :: updateFile :: error ", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      const result = await this.bucket.deleteFile({
        bucketId: conf.appwriteBucketId,
        fileId: fileId,
      });
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview({
      bucketId: conf.appwriteBucketId,
      fileId: fileId,
    });
  }
}
const service = new Service();
export default service;
