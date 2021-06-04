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
    '眠り',
    '麻痺',
    '封印',
    'マヒ',
    '呪い',
    'ブレス',
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
