import { TableRow, TableCell, TextRun, Paragraph, Table, WidthType } from "docx";


const table1 =
    [
        { key: "Drug Product (DP)", value: ["Drug_Product ", " Donanemab"] },
        { key: "Safety Concern Threshold (SCT)_", value: ["_Safety Concern Threshold (SCT)_", " 9"] },
        { key: "DP Concentration_ (mg/mL)", value: ["_DP_Concentration_ ", " 17.5"] },
        { key: "Maximum Dose (mg)", value: ["Maximum Dose (mg)", " 1400"] },
        { key: "Maximum  Dose Volume (mL/dose)", value: ["Max Dose Volume_ ", " 80"] },
        { key: "AET", value: ["_AET_", " 0.1"] },
    ];




const table4Rows = table1.map(item => {

    return new TableRow({
        children: [
            new TableCell({
                children: [
                    new Paragraph({ children: [new TextRun({ "text": item.key })] })
                ]
            }),
            new TableCell({
                children: [
                    new Paragraph({ children: [new TextRun({ "text": item.value[0], highlight: "yellow" }), new TextRun({ text: item.value[1],italics:true,color:"0000EE" })] })
                ]
            }),
        ]
    })

})

const table4 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({
                        children: [new TextRun({ text: "Assessment Parameter", bold: true, size: 24 })]
                    })]
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [new TextRun({ text: "Detail (Example)", bold: true, size: 24 })]
                    })]
                }),

            ]
        }),
        ...table4Rows
    ],
    width: {
        size: 10035,
        type: WidthType.DXA,
    }
    ,
    margins: {
        top: 30,
        bottom: 30,
        left: 100,
    },
})



export default table4;