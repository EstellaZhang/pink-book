import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
import { User } from './modal';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('68469de7001e99b4c372');

const databaseId = '68469e96002d3063e7be'
const collectionIdUser = '68469f3f00256a2eb539'

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

// 登录部分的API
const createUser = async (email: string, name:string, user_id:string,avatar_url:string) => {
  try {
    const user = await databases.createDocument(
      databaseId,
      collectionIdUser,
      ID.unique(),
      {
        email,
        name,
        user_id,
        avatar_url
      }
    );
    return user.$id;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export const getUserByUserId = async (user_id: string) => {
  const user = await databases.listDocuments(
    databaseId,
    collectionIdUser,
    [Query.equal('user_id', user_id)]
  )
  return user.documents[0]
}

export const login = async (email: string, password: string) => {
  try {
    // 该方法会下发一个session
    const res = await account.createEmailPasswordSession(email, password);
    return res
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const logout = async ()=>{
  try{
    const res = await account.deleteSession('current');
    return res;
  }catch(error){
    console.error('Error:', error);
    throw error;
  }
}

export const register = async (email: string, password: string, name: string) => {
  try {
    const user = await account.create(ID.unique(),email, password, name);  
    const avatarUrl = avatars.getInitials(name);
    const res = await createUser(email,name,user.$id,avatarUrl.toString());
    return user;  
  } catch (error) {
    console.log('Error registering user:', error);
    throw error;
  }
}

// 获取当前用户信息
export const getCurrentUser = async ()=>{
  const res = await account.get();
  if(res.$id){
    const user = await getUserByUserId(res.$id);
    return{
      userId: res.$id,
      email: res.email,
      name: res.name,
      avatarUrl: user?.avatar_url || avatars.getInitials(res.name).toString()
    } as User
  }
  return null;
}