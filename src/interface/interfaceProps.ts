export interface Root {
	en: En;
	ru: Ru;
	ch: Ch;
}

export interface En {
	menu: Menu;
	menu_link: MenuLink;
	main: Main;
	main_about: MainAbout;
	listObject: ListObject;
}

export interface Menu {
	tours: string;
	industrial_tourism: string;
	about_us: string;
	faq: string;
	contacts: string;
}

export interface MenuLink {
	phone: string;
	submit_request: string;
}

export interface Main {
	kamchatka: string;
	extreme_fishing: string;
	no_birds_fly: string;
	btn_to_tours: string;
}

export interface MainAbout {
	sentence_1: string;
	sentence_1_1: string;
	sentence_1_2: string;
	sentence_2: string;
}

export interface ListObject {
	rayon: RayonObj;
}

export interface RayonObj {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}
export interface Karaginsky {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface UstKhayryuzovo {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Kamchatka {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Penzhina {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Ru {
	menu: Menu2;
	menu_link: MenuLink2;
	main: Main2;
	main_about: MainAbout2;
	listObject: ListObject2;
}

export interface Menu2 {
	tours: string;
	industrial_tourism: string;
	about_us: string;
	faq: string;
	contacts: string;
}

export interface MenuLink2 {
	phone: string;
	submit_request: string;
}

export interface Main2 {
	kamchatka: string;
	extreme_fishing: string;
	no_birds_fly: string;
	btn_to_tours: string;
}

export interface MainAbout2 {
	sentence_1: string;
	sentence_1_1: string;
	sentence_1_2: string;
	sentence_2: string;
}

export interface ListObject2 {
	Karaginsky: Karaginsky2;
	'Ust-Khayryuzovo': UstKhayryuzovo2;
	Kamchatka: Kamchatka2;
	Penzhina: Penzhina2;
}

export interface Karaginsky2 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface UstKhayryuzovo2 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Kamchatka2 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Penzhina2 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Ch {
	menu: Menu3;
	menu_link: MenuLink3;
	main: Main3;
	main_about: MainAbout3;
	listObject: ListObject3;
}

export interface Menu3 {
	tours: string;
	industrial_tourism: string;
	about_us: string;
	faq: string;
	contacts: string;
}

export interface MenuLink3 {
	phone: string;
	submit_request: string;
}

export interface Main3 {
	kamchatka: string;
	extreme_fishing: string;
	no_birds_fly: string;
	btn_to_tours: string;
}

export interface MainAbout3 {
	sentence_1: string;
	sentence_1_1: string;
	sentence_1_2: string;
	sentence_2: string;
}

export interface ListObject3 {
	Karaginsky: Karaginsky3;
	'Ust-Khayryuzovo': UstKhayryuzovo3;
	Kamchatka: Kamchatka3;
	Penzhina: Penzhina3;
}

export interface Karaginsky3 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface UstKhayryuzovo3 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Kamchatka3 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}

export interface Penzhina3 {
	name: string;
	description: string;
	img: string[];
	link: string;
	link_name: string;
}
