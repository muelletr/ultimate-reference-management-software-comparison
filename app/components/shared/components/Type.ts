import { LabelCls } from './LabelCls';

export class Type {
    constructor(
        public tag: string = "",
        public cls: string = "",
        public ngCls: LabelCls = new LabelCls()     
    ){}
}