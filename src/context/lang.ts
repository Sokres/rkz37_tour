import { AllowedLengs } from '@/constants/lang';
import { createDomain } from 'effector';

const lang = createDomain();
export const setLeng = lang.createEvent<AllowedLengs>();
export const $lang = lang
	.createStore(AllowedLengs.RU)
	.on(setLeng, (__, lang) => lang);
