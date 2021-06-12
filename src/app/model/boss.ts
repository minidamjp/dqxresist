/**
 * ボスモンスターの情報
 */
export interface Boss {
    id: string;
    groupId: string;
    fullname: string;
    shortname: string;
    // 必須耐性
    recommendedResists: string[];
    // 任意耐性
    suggestedResists: string[];
    // 報酬
    reward: string[];
}
