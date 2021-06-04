import { Boss } from '../model/boss';
import { getBossGroupByName } from './boss-group-master';
import { getRegistByName } from './resist-master';

let bossGroupIdToBossList: {[key: string]: Boss[]};

function CreateMaster(bases: any[][]): Boss[] {
    bossGroupIdToBossList = {};
    return bases.map((base: any[]) => {
        const group = getBossGroupByName(base[1]);
        const boss: Boss = {
            id: base[0],
            groupId: group.id,
            fullname: base[2],
            shortname: base[3] ? base[3] : base[2],
            recommendedResists: base[4] ? base[4] : [],
            suggestedResists: base[5] ? base[5] : [],
        };
        // recommendedResists, suggestedResists に設定した名前が正しいことのチェック
        for (const resistName of boss.recommendedResists) {
            getRegistByName(resistName);
        }
        for (const resistName of boss.suggestedResists) {
            getRegistByName(resistName);
        }
        if (!bossGroupIdToBossList[group.id]) {
            bossGroupIdToBossList[group.id] = [];
        }
        bossGroupIdToBossList[group.id].push(boss);
        return boss;
    });
}

export const BossMaster = CreateMaster([
    // id, グループ名, 名前, 短縮名(null), 必須耐性, 任意耐性
    ['legnard', '常闇', 'レグナード', null, ['封印', 'マヒ', '呪い'], ['ブレス', '雷'], ],
]);

export function getBossById(id: string): Boss {
    for (const boss of BossMaster) {
        if (boss.id === id) {
            return boss;
        }
    }
    throw new Error(`Unknown boss id: ${id}`);
}

export function getBossListForBossGroupId(groupId: string): Boss[] {
    return bossGroupIdToBossList[groupId];
}
