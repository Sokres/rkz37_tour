import { createDomain } from 'effector';

const modal = createDomain();
export const openMenu = modal.createEvent();
export const closeMenu = modal.createEvent();
export const $menuIsOpen = modal
	.createStore(true)
	.on(openMenu, () => true)
	.on(closeMenu, () => false);

export const openFrame = modal.createEvent();
export const closeFrame = modal.createEvent();
export const $frameIsOpen = modal
	.createStore(true)
	.on(openFrame, () => true)
	.on(closeFrame, () => false);
