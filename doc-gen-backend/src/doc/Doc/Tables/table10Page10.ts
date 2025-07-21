import { Table, TableRow, TableCell, Paragraph, TextRun, WidthType } from "docx"

const data =  [
  "Component",
  "Brand",
  "Extract",
  "Identification",
  "Max. Reported Extractable concentration (ug/cm2)",
  "Potential Leachable Concentration (µg/mL)a",
  "Potential Exposure",
  "ADI",
  "MOS"
];




const table2Cell = data.map((item) => {

    return new TableCell({
        children: [
            new Paragraph({
                children: [new TextRun({ text: item,bold:true,size:24 })]
            })
        ]
    })

})


const table2EmptyRow = data.map(item=> new TableCell({children:[new Paragraph({text:" ",spacing:{after:200}})]}));



const table10 = new Table({

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
                top: 100,
                bottom: 100,
                left: 50,
                right:50
    },
})


export default table10;