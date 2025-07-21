import { Table, TableRow, TableCell, Paragraph, TextRun, WidthType } from "docx"


const data = [
    "Single Use Item #",
    "Manufacturer",
    "Identification/Description PCM Type",
    "Sterilization Method",
    "Quantity Assessed",
    "Total Product Contact Surface Area (cm²)",
    "Dilution Volume (mL)",
    "SA:V (cm²/mL)",
    "Risk Level"
];


const table2Cell = data.map((item) => {

    return new TableCell({
        children: [
            new Paragraph({
                children: [new TextRun({ text: item })]
            })
        ]
    })

})


const table2EmptyRow = data.map(item=> new TableCell({children:[new Paragraph({text:" ",spacing:{after:200}})]}));



const table2 = new Table({

    rows: [
        new TableRow({
            children: table2Cell
        }),
        new TableRow({
            children:table2EmptyRow
        })
    ],
    width: {
        size: 10000,
        type: WidthType.DXA,
    },
    margins: {
                top: 200,
                bottom: 200,
                left: 100,
    },
})


export default table2;