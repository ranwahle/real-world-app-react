import i18n, { InitOptions as InitOptionsProps } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export * from "react-i18next";

export const i18nInstance = i18n.createInstance();

const initOptions: InitOptionsProps = {
  lng: "en",
  ns: ["main"],
  defaultNS: "main",
  fallbackLng: "en",
  saveMissing: true,
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
};

type LocaleImportCallback = (arg: any, resources: any) => void;

i18nInstance
  .use(
    resourcesToBackend(
      (language: string, namespace: string, callback: LocaleImportCallback) => {
        // Just import from local.
        // using https://www.i18next.com/how-to/backend-fallback#you-can-also-lazy-load-the-in-memory-translations-i.e.-when-using-webpack
        import(`../assets/locales/${language}/${namespace}.json`)
          .then((resources) => {
            callback(null, resources);
          })
          .catch((error) => callback(error, null));
      }
    )
  )
  .use(initReactI18next)
  .init(initOptions, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log("Error occured when initialize the i18next: ", error);
    }
    return true;
  });
