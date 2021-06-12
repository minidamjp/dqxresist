import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

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
            reward: base[6] ? base[6] : [],
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
    // id, グループ名, 名前, 短縮名(null), 必須耐性, 任意耐性,報酬
    ['legnard', '守護者', 'レギルラッゾ＆ローガスト', 'レギロ', ['呪い', 'ブレス'], ['混乱', '幻惑', 'おびえ', '闇'], ['紫水晶の羽根'], ],
    ['legnard', '守護者', 'スコルパイド', 'サソリ', ['即死', '毒'], ['混乱', '呪い', '幻惑', '封印', '闇'], ['紅水晶の羽根'], ],
    ['legnard', '守護者', 'ジェルザーク', 'ジェル', ['混乱', '踊らされ', '転び', '幻惑', 'ブレス'], ['眠り', '呪い', '封印', 'マヒ', '闇', '炎', '雷'], ['翠水晶の羽根'], ],
    ['legnard', '守護者', 'ガルドドン', null, ['マヒ'], ['呪い', '混乱', '封印', '雷'], ['黃水晶の羽根'], ],
    ['legnard', '守護者', 'デルメゼ', null, ['転び', 'ブレス'], ['呪い', 'おびえ', '混乱', '幻惑', 'マヒ', '闇', '氷'], ['蒼水晶の羽根'], ],
    ['legnard', '守護者', 'バラシュナ', null, ['毒', '呪文耐性', '即死', '転び', '混乱'], ['呪い', '幻惑', 'おびえ', 'ブレス', '踊らされ'], ['黒水晶の羽根'], ],
    ['legnard', '常闇', 'レグナード', 'レグ', ['封印', 'マヒ', '呪い'], ['ブレス', '雷'], ['レグナライト'], ],
    ['legnard', '常闇', 'ダークキング', 'DK', ['毒'], ['風'], ['レグナライト', 'ダークゼリー'], ],
    ['legnard', '常闇', 'メイヴ', 'イカ', ['マヒ', '幻惑', '封印', '呪い', '混乱'], ['呪文耐性', '雷'], ['レグナライト', 'わだつみのしずく'], ],
    ['legnard', 'コイン', 'ムドー', null, ['眠り', 'おびえ'], ['呪文耐性', '雷', 'ブレス'], ['夢幻魔王の勲章'], ],
    ['legnard', 'コイン', '魔犬レオパルド', '犬', ['毒', 'おびえ'], ['混乱', '呪い', 'ブレス', '呪文耐性', '氷', '闇'], ['魔犬の仮面'], ],
    ['legnard', 'コイン', 'ドラゴン', null, [], ['ブレス', '炎'], ['竜のうろこ'], ],
    ['legnard', 'コイン', '帝国三将軍', 'ガナン', ['おびえ', '封印', '幻惑'], ['眠り', '呪文耐性', '炎'], ['ガナン帝国の勲章'], ],
    ['legnard', 'コイン', 'ゴレオン将軍', 'ゴレオン', ['幻惑', 'おびえ'], ['呪い'], ['剛勇のベルト'], ],
    ['legnard', 'コイン', 'ゲルニック将軍', 'ゲルニック', ['封印', '幻惑', '眠り'], ['呪文耐性', '炎'], ['智謀の首飾り'], ],
    ['legnard', 'コイン', 'ギュメイ将軍', 'ギュメイ', ['おびえ'], ['光', '氷'], ['忠義の勲章'], ],
    ['legnard', 'コイン', 'スライダーク', null, ['呪い', '即死'], ['呪文耐性', '闇', '雷'], ['死神のピアス'], ],
    ['legnard', 'コイン', 'スライムジェネラル', 'Sジェネ', [], ['呪文耐性', '光'], ['武刃将軍の指輪', '魔導将軍の指輪'], ],
    ['legnard', 'コイン', 'Sキラーマシン', 'Sキラ', [], [], ['機神の眼甲'], ],
    ['legnard', 'コイン', '暗黒の魔人', '魔人', ['転び', 'マヒ'], [], ['魔人の勲章'], ],
    ['legnard', 'コイン', 'ドン・モグーラ', 'もぐら', ['混乱', '転び', '幻惑', 'おびえ', 'マヒ'], [], ['大地の大竜玉'], ],
    ['legnard', 'コイン', '幻界の四諸侯', '諸侯', ['封印', '呪い', '混乱', 'マヒ'], ['呪文耐性', '風'], ['幻界闘士の指輪', '幻界導師の指輪'], ],
    ['legnard', 'コイン', 'キラーマジンガ', 'マジンガ', ['転び'], [], ['アクセルギア'], ],
    ['legnard', 'コイン', '伝説の三悪魔', '三悪魔', ['踊り', '魅了', 'マヒ', '毒', '転び'], ['ブレス'], ['忠誠のチョーカー'], ],
    ['legnard', 'コイン', 'グラコス', null, ['踊り', '混乱', '眠り', '毒', '呪い', 'マヒ'], [], ['海魔の眼甲'], ],
    ['legnard', 'コイン', 'キングヒドラ', 'ヒドラ', ['踊り', '毒', 'おびえ'], ['ブレス'], ['ハイドラベルト'], ],
    ['legnard', 'コイン', 'バラモス', null, ['魅了', '封印', '転び', '幻惑', 'マヒ'], [], ['魔王のネックレス'], ],
    ['legnard', 'コイン', 'ドラゴンガイア', 'ガイア', ['おびえ'], ['ブレス', '炎'], ['大地の竜玉'], ],
    ['legnard', 'コイン', '悪霊の神々', '悪霊', ['転び', '封印', '即死', '眠り', 'マヒ'], ['ブレス'], ['悪霊の仮面'], ],
    ['legnard', 'コイン', 'ベリアル', null, ['マヒ'], ['ブレス'], ['ぎんのロザリオ'], ],
    ['legnard', 'コイン', 'バズズ', null, ['封印', '即死', '眠り', 'しばり'], [], ['ソーサリーリング'], ],
    ['legnard', 'コイン', 'アトラス', null, ['転び'], [], ['バトルチョーカー'], ],
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
