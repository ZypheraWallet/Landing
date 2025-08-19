
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

function deepMerge(target: any, source: any) {
    for (const key of Object.keys(source)) {
        if (
            source[key] &&
            typeof source[key] === 'object' &&
            !Array.isArray(source[key])
        ) {
            target[key] = deepMerge(target[key] ?? {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = requested ?? routing.defaultLocale;

    const ru = (await import('../localization/ru.json')).default;
    const localeMessages = (await import(`../localization/${locale}.json`)).default;

    const messages = deepMerge(JSON.parse(JSON.stringify(ru)), localeMessages);

    return {
        locale,
        messages
    };
});
