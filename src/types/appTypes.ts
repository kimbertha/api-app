/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Options {
    id: number;
    body: any
  }
  
export interface List extends Options {
    result?:any;
  }

export interface AssumptionType {
category: any;
id: number;
string: string; 
}