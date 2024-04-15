
import {SignupInput} from '@lohitbura/homeremediy-common/dist/auth/auth_zod';
import apiService from '../utils/services/api_service';
import { apiConstants } from '../utils/app_constants/api_constants';
import { authResponseInterface } from '../utils/interfaces/auth_interface';
import { appConstants } from '../utils/app_constants/app_string_constants';

export const loginUser = async(loginInput:SignupInput):Promise<authResponseInterface>=>{
    try{
    
        const data:authResponseInterface = await apiService.post(apiConstants.loginUser,loginInput);
        console.log(data)
        return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(e:any){
        return{
        response:appConstants.failure,
        error:e.toString()
        }
    }
}