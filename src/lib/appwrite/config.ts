import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '667c025f000099b24774',
  databaseId: '667c116d003235c95773',
  storageId: '667c10ea0020101eed89',
  userCollectionId: '667c1266000ddea5801a',
  postCollectionId: '667c12350037f807ce9c',
  savesCollectionId: '667c1284002f28fe25c2',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);