import { writable } from 'svelte/store';

export const selected = writable(0);

export const count = writable({all: 1, type: 0, color: 0, comp: 0})


