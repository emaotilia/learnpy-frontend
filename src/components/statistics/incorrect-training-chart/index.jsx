import { renameKeys } from "../../../utils/object-utils";

import { CircularProgress } from "@mui/material";

import { CircularProgressWrapper } from "./styles";

import { useGetIncorrectTrainingStatisticsHook } from "../../../features/statistics/hooks";

import {
    EASY_BG_COLOR,
    HARD_BG_COLOR,
    MEDIUM_BG_COLOR,
    VERY_HARD_BG_COLOR
} from "../../../constants/color-constants";

import {
    Line,
    YAxis,
    XAxis,
    Legend,
    Tooltip,
    LineChart,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function IncorrectTrainingChart() {
    console.log('RENDER GENERAL STATISTICS PAGE')

    const { incorrectTrainingStatistics, isLoading } = useGetIncorrectTrainingStatisticsHook();

    const formattedStatistics = incorrectTrainingStatistics.map(
        (object) => renameKeys(
            object,
            ['easy', 'medium', 'hard', 'veryHard'],
            ['Ușoară', 'Medie', 'Dificilă', 'Foarte dificilă']
        )
    );

    if (isLoading) {
        return (
            <CircularProgressWrapper>
                <CircularProgress />
            </CircularProgressWrapper>
        )
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedStatistics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Ușoară" stroke={EASY_BG_COLOR} />
                <Line type="monotone" dataKey="Medie" stroke={MEDIUM_BG_COLOR} />
                <Line type="monotone" dataKey="Dificilă" stroke={HARD_BG_COLOR} />
                <Line type="monotone" dataKey="Foarte dificilă" stroke={VERY_HARD_BG_COLOR} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default IncorrectTrainingChart;