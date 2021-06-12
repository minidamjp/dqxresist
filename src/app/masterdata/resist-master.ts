import { Resist } from '../model/resist';

function CreateMaster(bases: any[]): Resist[] {
    return bases.map((base: any, index: number) => {
        return {
            id: base,
            name: base,
            order: index,
        };
    });
}

/**
 * 耐性マスター
 */
export const ResistMaster = CreateMaster([
    'マヒ',
    '混乱',
    '封印',
    '幻惑',
    '即死',
    '呪い',
    '眠り',
    '毒',
    'おびえ',
    '転び',
    '踊らされ',
    '魅了',
    'しばり',
    'MP吸収',
    '呪文耐性',
    'ブレス',
    '炎',
    '氷',
    '光',
    '闇',
    '風',
    '土',
    '雷',
]);

export function getRegistById(id: string): Resist {
    for (const resist of ResistMaster) {
        if (resist.id === id) {
            return resist;
        }
    }
    throw new Error(`Unknown resist id: ${id}`);
}

export function getRegistByName(name: string): Resist {
    for (const resist of ResistMaster) {
        if (resist.name === name) {
            return resist;
        }
    }
    throw new Error(`Unknown resist name: ${name}`);
}
