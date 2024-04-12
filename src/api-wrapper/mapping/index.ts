// Make sure your mapping types are set up in the '../types' file
import {States, Hotels} from '../types';

interface JsonFile {
  [key: string]: string;
}

export function getStatesName(id: number): States {
  return (/*states from import*/ states as JsonFile)[id] as States;
}

export function getHotelName(id: number): Hotels {
  return (/*hotels from import*/hotels as JsonFile)[id] as Hotels;
}
