import { BaseConfig } from "../BaseConfig";

export interface LMTextConfig extends BaseConfig {
    width?: number;
    
    height?: number;

    borderRadius: number;

    fontFamily: string;

    fontSize: number;

    fontColor: string;

    backgroundColor: string;

    padding?: number;

    italic: boolean;

    bold: boolean;
}