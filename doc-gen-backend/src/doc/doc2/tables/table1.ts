import {
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    WidthType,
    VerticalMergeType,
} from "docx";

import { table1Data } from "../static/const";

const table1 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: { size: 2000, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: "Risk Factor", bold: true })], alignment: "center" })],
                }),
                new TableCell({
                    width: { size: 1000, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: "Ratings", bold: true })], alignment: "center" })],
                }),
                new TableCell({
                    width: { size: 6000, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: "Rating Criteria", bold: true })], alignment: "center" })],
                }),
                new TableCell({
                    width: { size: 1500, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: "E&L Weight", bold: true })], alignment: "center" })],
                }),
            ],
        }),

        ...table1Data.flatMap((item) =>
            item.ratingArr.map((ratingObj, index) =>
                new TableRow({
                    children: [
                        index === 0
                            ? new TableCell({
                                  children: [new Paragraph(item.riskFactor)],
                                  verticalMerge: VerticalMergeType.RESTART,
                              })
                            : new TableCell({
                                  children: [],
                                  verticalMerge: VerticalMergeType.CONTINUE,
                              }),

                        new TableCell({
                            children: [new Paragraph(ratingObj.rating.toString())],
                        }),

                        new TableCell({
                            children: [new Paragraph(ratingObj.ratingCriteria)],
                        }),

                        index === 0
                            ? new TableCell({
                                  children: [new Paragraph(item.ELWeight.toString())],
                                  verticalMerge: VerticalMergeType.RESTART,
                              })
                            : new TableCell({
                                  children: [],
                                  verticalMerge: VerticalMergeType.CONTINUE,
                              }),
                    ],
                })
            )
        ),
    ],
    width: {
        size: 10000,
        type: WidthType.DXA,
    },
    margins: {
        top: 50,
        bottom: 50,
        left: 100,
    },
});

export default table1;
