

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
        kLogout:'Logout'
    },
    hi:{
        kAboutUs:'हमारे बारे में',
        kLogin:'Login',
        kRegister:'Register',
        kHome:'Home',
        kLogout:'Logout'
    },
    de:{
        kAboutUs:'About Us',
        kLogin:'Login',
        kRegister:'Register',
        kHome:'Home',
        kLogout:'Logout'
    }
}

export const appConstants = {
    success:"Success",
    failure:"Failure"
}