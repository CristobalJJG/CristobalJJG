export class Tag {
    txt: string;
    icon: string;
    leftColor: string;
    rightColor: string

    constructor(rt: string, icon: string, lc: string, rc: string) {
        this.txt = rt;
        this.icon = icon;
        this.leftColor = lc;
        this.rightColor = rc;
    }
}