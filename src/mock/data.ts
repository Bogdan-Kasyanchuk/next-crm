export const user = {
    fullName: 'Adam Smith',
    avatar: '/images/avatar.png',
    email: 'adamsmith@gmail.com',
} as const;

export const categories:string[] = [
    'Manufacturing',
    'Trade',
    'Services',
    'Education',
    'Finance',
    'Construction',
    'Science',
    'Information',

];

export const countries:Record<Country, string> = {
    can: 'Canada',
    usa: 'USA',
    ita: 'Italy',
    ukr: 'Ukraine',
    deu: 'Germany',
};

export type Country = 'can' | 'usa' | 'ita' | 'ukr' | 'deu'