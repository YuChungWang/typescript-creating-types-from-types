/**
 * Template Literals：TypeScript 會根據所傳入的聯集，自動組成新的聯集
 */

type X = 'left' | 'right';
type Y = 'top' | 'bottom';

type Position = `${X}-${Y}`;

export {};
