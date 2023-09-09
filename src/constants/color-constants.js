import { DIFFICULTY } from "./difficulty-constants";

export const DIFFICULTY_COLORS = {
    [DIFFICULTY.all]: {
        boxShadow: '#474747',
        background: '#6b6b6b'
    },
    [DIFFICULTY.easy]: {
        boxShadow: '#20ad2b',
        background: '#34ed43'
    },
    [DIFFICULTY.medium]: {
        boxShadow: '#257dbc',
        background: '#51adef'
    },
    [DIFFICULTY.hard]: {
        boxShadow: '#c62121',
        background: '#ef5151'
    },
    [DIFFICULTY.veryHard]: {
        boxShadow: '#110f0f',
        background: '#383535'
    },
    [DIFFICULTY.random]: {
        boxShadow: '#474747',
        background: '#6b6b6b'
    }
};

export const BLOCK_COLORS = ['#48aca2', '#5a395a', '#be8a28', '#5e5efb', '#78c078'];

export const ALL_BG_COLOR = DIFFICULTY_COLORS[DIFFICULTY.all].background;
export const ALL_BOX_SHADOW = DIFFICULTY_COLORS[DIFFICULTY.all].boxShadow;

export const EASY_BG_COLOR = DIFFICULTY_COLORS[DIFFICULTY.easy].background;
export const EASY_BOX_SHADOW = DIFFICULTY_COLORS[DIFFICULTY.easy].boxShadow;

export const MEDIUM_BG_COLOR = DIFFICULTY_COLORS[DIFFICULTY.medium].background;
export const MEDIUM_BOX_SHADOW = DIFFICULTY_COLORS[DIFFICULTY.medium].boxShadow;

export const HARD_BG_COLOR = DIFFICULTY_COLORS[DIFFICULTY.hard].background;
export const HARD_BOX_SHADOW = DIFFICULTY_COLORS[DIFFICULTY.hard].boxShadow;

export const VERY_HARD_BG_COLOR = DIFFICULTY_COLORS[DIFFICULTY.veryHard].background;
export const VERY_HARD_BOX_SHADOW = DIFFICULTY_COLORS[DIFFICULTY.veryHard].boxShadow;