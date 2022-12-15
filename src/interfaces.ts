export interface IJob { 
	id: number;
	title: string;
	company: string;
	url: string;
	description: string;
	skillList: string;
	skills: ISkill[];
	todo: string;
}

export interface ISkill {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

export interface ITodo {
	todoText: string;
	company: string;
	title: string;
	url: string;
}

export interface ISkillTotal {
	skill: ISkill;
	total: number;
	isOpen: boolean;
	lookupInfoLink: string;
}