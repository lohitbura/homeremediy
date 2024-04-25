

export const appGlobalConstants = {
    token:"",
}

interface Translations {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

export const appLocalizationString:Translations = {
    en:{
        kAboutUs:'About Us',
        kLogin:'Login',
        kRegister:'Register',
        kHome:'Home',
        kLogout:'Logout',
        kAddPost:'Add Post'
    },
    hi:{
        kAboutUs:'हमारे बारे में',
        kLogin:'Login',
        kRegister:'Register',
        kHome:'Home',
        kLogout:'Logout',
        kAddPost:'Add Post'
    },
    de:{
        kAboutUs:'About Us',
        kLogin:'Login',
        kRegister:'Register',
        kHome:'Home',
        kLogout:'Logout',
        kAddPost:'Add Post'
    }
}

export const appConstants = {
    success:"Success",
    failure:"Failure"
}