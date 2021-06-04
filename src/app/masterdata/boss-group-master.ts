import { BossGroup } from '../model/boss-group';

function CreateMaster(bases: any[]): BossGroup[] {
    return bases.map((base: any, index: number) => {
        return {
            id: base,
            name: base,
        };
    });
}

export const BossGroupMaster = CreateMaster([
    // 名前
    '常闇',
    'ほげほげふがふが',
]);

export function getBossGroupByName(name: string): BossGroup {
    for (const bossGroup of BossGroupMaster) {
        if (bossGroup.name === name) {
            return bossGroup;
        }
    }
    throw new Error(`Unknown BossGroup name: ${name}`);
}

export function getBossGroupById(id: string): BossGroup {
    for (const bossGroup of BossGroupMaster) {
        if (bossGroup.id === id) {
            return bossGroup;
        }
    }
    throw new Error(`Unknown BossGroup id: ${id}`);
}
