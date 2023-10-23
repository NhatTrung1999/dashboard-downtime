import { Box, Typography } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const data = [
  {
    name: "Monday",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "Tuesday",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "Wednesday",
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: "Thursday",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "Friday",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "Satureday",
    uv: 23,
    pv: 38,
    amt: 25,
  },
];

const data1 = [
  { name: "Bobbin Fix", value: 2 },
  { name: "Thread Cought", value: 2 },
  { name: "Electric Wiring", value: 2 },
  { name: "Broken Part", value: 2 },
  { name: "Computer Switch", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#00FF00"];

const breakdowns = [
  {
    title: "DN Post-TA3978494",
    hours: "132 hr",
    breakdown: "6 breakdowns",
    line: "A-6",
  },
  {
    title: "Hammer-TA3298288",
    hours: "128 hr",
    breakdown: "3 breakdowns",
    line: "A-6",
  },
  {
    title: "Zig Zag-TA1395323",
    hours: "112 hr",
    breakdown: "5 breakdowns",
    line: "A-6",
  },
  {
    title: "Sm Computer-TA2567559",
    hours: "58 hr",
    breakdown: "4 breakdowns",
    line: "A-6",
  },
];

export default function Content() {
  return (
    <Box display="flex">
      <Box flex={5} display="flex" flexDirection="column">
        {/* ------top------- */}
        <Box
          border="1px solid #ccc"
          borderRadius="20px"
          padding="15px"
          margin="10px"
        >
          <Box display="flex" justifyContent="space-between">
            <Box>Avg. Repair Time</Box>
            <Box>This week Last week Sort by Day</Box>
            <Box>...</Box>
          </Box>
          <Box width="100%" height="94%">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="linear"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="linear"
                  dataKey="uv"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        {/* ---------------- */}
        {/* ------bottom------- */}
        <Box width="100%" display="flex">
          {/* -------Left------- */}
          <Box
            width="50%"
            border="1px solid #ccc"
            borderRadius="20px"
            padding="15px"
            margin="10px"
          >
            <Box display="flex" justifyContent="space-between">
              <Box>Most Breakdowns</Box>
              <Box>...</Box>
            </Box>
            <Box>Sort by week Sort by downtime</Box>
            {breakdowns.map((breakdown, index) => (
              <Box display="flex" alignItems="center" key={index}>
                <Box
                  border="1px solid #ccc"
                  padding="10px 15px"
                  borderRadius="10px"
                >
                  {index + 1}
                </Box>
                <Box>
                  <Typography>{breakdown.title}</Typography>
                  <Typography>
                    {breakdown.hours} {breakdown.breakdown} {breakdown.line}{" "}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          {/* ------------------ */}
          {/* -------Right------ */}
          <Box
            width="50%"
            border="1px solid #ccc"
            borderRadius="20px"
            padding="15px"
            margin="10px"
          >
            <Box display="flex" justifyContent="space-between">
              <Box>Top breakdown Causes</Box>
              <Box>...</Box>
            </Box>
            <Box>Sort by day</Box>
            <Box width="100%" height="87%">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    verticalAlign="bottom"
                    // height={40}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          {/* --------Right---------- */}
        </Box>
        {/* ----------Bottom--------- */}
      </Box>
      <Box
        flex={2}
        border="1px solid #ccc"
        borderRadius="20px"
        padding="15px"
        margin="10px"
      >
        <Box display="flex" justifyContent="space-between">
          <Box>Maintenance Queue</Box>
          <Box>...</Box>
        </Box>
        {/* -----------Top----------- */}
        <Box width="100%" height="50%">
          <Box
            display="flex"
            justifyContent="space-between"
            paddingLeft="10px"
            paddingRight="10px"
          >
            <Box>Open Requests</Box>
            <Box>Sort by priority</Box>
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                <WarningAmberIcon />
              </Box>
              <Box>
                <Typography>Overlock-TA2466358</Typography>
                <Typography>A-6 5 minutes Priority 1</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                <WarningAmberIcon />
              </Box>
              <Box>
                <Typography>Med. Computer-TA1977070</Typography>
                <Typography>A1-2 12 minutes Priority 2</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                <WarningAmberIcon />
              </Box>
              <Box>
                <Typography>DN Post-TA1977070</Typography>
                <Typography>A1-3 4 minutes Priority 3</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* ------------------------- */}
        {/* ----------Bottom--------- */}
        <Box width="100%" height="50%">
          <Box
            display="flex"
            justifyContent="space-between"
            paddingLeft="10px"
            paddingRight="10px"
          >
            <Box>Mechanic List</Box>
            <Box>Sort by type</Box>
          </Box>

          <Box>
            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                1
              </Box>
              <Box>
                <Typography>Điện-A1 Stitching</Typography>
                <Typography>A-6 18 minutes On way</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                2
              </Box>
              <Box>
                <Typography>Nguyên-A1 Stitching</Typography>
                <Typography>Overlock Request Sent</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                3
              </Box>
              <Box>
                <Typography>Việt-A1 Stitching</Typography>
                <Typography>A-6 5 minutes Fixing</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                4
              </Box>
              <Box>
                <Typography>Trọng-A1 Stitching</Typography>
                <Typography>A-6 23 minutes Fixing</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box
                border="1px solid #ccc"
                padding="10px 15px"
                borderRadius="10px"
              >
                5
              </Box>
              <Box>
                <Typography>Tâm-A1 Stitching</Typography>
                <Typography>G Build 20 minutes Task</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* ------------------------- */}
      </Box>
    </Box>
  );
}
