
import { Paragraph, Footer, TextRun, Table, TableRow, TableCell, WidthType, PageNumber } from "docx";


const page3 = {
    footers: {
        default: new Footer({
            children: [
                new Paragraph({
                    children: [new TextRun({ children: ["Proprietary & Confidential - Eli Lilly & Company		            Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES] })],
                    alignment: "center"
                })
            ]
        })
    },
    children: [
        new Paragraph({
            pageBreakBefore: true,
            children: [
                new TextRun({ text: "Operator Review: ", bold: true, size: 22 }),
                new TextRun({ text: "Your review completion in QualityDocs confirms that the information in this technical document is clearly written, accurate, accurately referenced, and that all requirements for writing a technical document have been met.", size: 24 }),
            ],
            spacing: {
                after: 200
            }
        }),
        new Table({
            // columnWidths: [6505, 5505],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {

                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_input_author_name_1_", size: 28, highlight: "yellow", break: 1 })], alignment: "center", spacing: { after: 200 } }),
                            new Paragraph({ children: [new TextRun({ text: "_input_author_name_1_", size: 28, highlight: "yellow" })], alignment: "center" }),
                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 6935,
                type: WidthType.DXA,
            },
            alignment: "left",

        }),

        new Paragraph({
            children: [
                new TextRun({ text: "Data Integrity Review:   ", bold: true, size: 22 }),
                new TextRun({ text: "Your review completion in QualityDocs confirms that the information in this technical document can be traced to an appropriate source, that all referenced data and results have been accurately transcribed from an appropriate source, that all data used for manual calculations performed in this technical report are clearly identified and can be traced to an appropriate source, and that all manual calculations performed in this technical report are accurate.", size: 24 }),
            ],
            spacing: {
                before: 200,
                after: 200
            }
        }),
        new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {

                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_dir_reviewer_name_1_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({}),
                            new Paragraph({ children: [new TextRun({ text: "_dir_reviewer_description_1_", size: 28, highlight: "yellow" })], alignment: "center" }),
                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 6935,
                type: WidthType.DXA,
            },
            alignment: "left"
        }),
        new Paragraph({
            children: [
                new TextRun({ text: "Technical Review:    ", bold: true, size: 22 }),
                new TextRun({ text: "Your review completion within the QualityDocs system confirms that sufficient information and detail have been reported in this technical report, that it is scientifically sound, and that appropriate conclusions have been included.", size: 24 }),
            ],
            spacing: {
                before: 200,
                after: 200
            }
        }),

        new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {
                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_name_1_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({}),
                            new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_description_1_", size: 28, highlight: "yellow" })], alignment: "center" }),
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {

                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_name_2_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({}),
                            new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_description_2_", size: 28, highlight: "yellow" })], alignment: "center" }),
                            ]
                        })
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {

                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_name_3_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_description_3_", size: 28, highlight: "yellow" })], alignment: "center", spacing: { before: 200 } }),
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {

                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_name_4_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({ children: [new TextRun({ text: "_tech_reviewer_description_4_", size: 28, highlight: "yellow" })], alignment: "center", spacing: { before: 200 } }),
                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 6935,
                type: WidthType.DXA,
            },
            alignment: "left",

        }),

        new Paragraph({
            children: [
                new TextRun({ text: "Approval:    ", bold: true, size: 22 }),
                new TextRun({ text: "Your electronic approval signature within the QualityDocs system confirms that the listed author(s) are appropriate, and the reviewers are qualified to complete their activities.  You agree that this document has been written and reviewed by appropriately qualified individuals, and that it should be issued as a technical document. Additionally, you understand and agree with the strategy contained in this document.", size: 24 }),
            ],
            spacing: {
                before: 200,
                after: 200
            }
        }),

        new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {
                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_approval_author_name_1_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({ children: [new TextRun({ text: "_approval_author_description_1_", size: 28, highlight: "yellow" })], alignment: "center", spacing: { before: 200 } }),
                            ]
                        }),
                        new TableCell({
                            width: {
                                size: 3905,
                                type: WidthType.DXA,
                            },

                            margins: {
                                bottom: 200,
                                left: 100,
                            },
                            children: [new Paragraph({ children: [new TextRun({ text: "_approval_author_name_2_", size: 28, highlight: "yellow", break: 1 })], alignment: "center" }),
                            new Paragraph({ children: [new TextRun({ text: "_approval_author_description_2_", size: 28, highlight: "yellow" })], alignment: "center", spacing: { before: 200 } }),
                            ]
                        })
                    ],
                }),
            ],
            width: {
                size: 6935,
                type: WidthType.DXA,
            },
            alignment: "left"
        }),


    ]
}

export default page3;