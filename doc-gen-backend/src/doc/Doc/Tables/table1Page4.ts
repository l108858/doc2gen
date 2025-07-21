import { Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";



const data = [
    { key: "Molecule", value: ["Molecule", " Donanemab"] },
    { key: "LY#", value: ["LY#", " LY3002813"] },
    { key: "Applicable DS Site(s)", value: ["Site_Name_DS", " Limerick"] },
    { key: "Applicable DS Fill Lines (FL)/Building (B)", value: ["DS_Fill_Lines_Building", " N/A"] },
    { key: "Applicable DP Site(s)", value: ["Site_Name_DP", " BSP (Contract manufacturing)"] },
    { key: "Applicable DP Fill Lines (FL)/Building (B)", value: ["_DP_Fill_Lines_Building", " FL16"] },
    { key: "DP Minimum Batch Size (L)", value: ["DP_Min_batch_size", " 170"] },
    { key: "Container Closure", value: ["Container", " Syringe, vial, cartridge"] },
];




const table1Rows = data.map(item => {

    return new TableRow({
        children: [
            new TableCell({
                children: [
                    new Paragraph({ children: [new TextRun({ "text": item.key, size: 24 })] })
                ]
            }),
            new TableCell({
                children: [
                    new Paragraph({ children: [new TextRun({ "text": item.value[0], highlight: "yellow", size: 24 }), new TextRun({ text: item.value[1], size: 24,italics:true,color:"0000EE" })] })
                ]
            }),
        ]
    })

})

const table1 = new Table({
    margins: {
        top: 30,
        bottom: 30,
        left: 100,
    },
    columnWidths: [11505, 11505],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({ children: [new TextRun({ "text": "Assessments Parametsrs", bold: true, size: 24 })] })
                    ],

                }),
                new TableCell({
                    children: [
                        new Paragraph({ children: [new TextRun({ text: "Detail (Example)", bold: true, size: 24 })] })
                    ]
                })
            ]
        }),

        ...table1Rows
    ],
    width: {
        size: 10035,
        type: WidthType.DXA,
    }
})



export default table1;